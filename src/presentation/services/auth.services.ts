//import { bcryAdapter } from "../../config";
import { CryptoAdapter, JwtAdapter } from "../../config";
import { prisma } from "../../data/postgres";
import { CustomError, RegisterUserDto, User } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { Payrollsup } from "../../domain/entities/payrollsup.entity";



export class AuthService {

    // DI
    constructor(){}

    public async registerUser(registerDto: RegisterUserDto){
      
        const existUser = await prisma.sec_users.findFirst({ where: { login: registerDto.login} })
        if ( existUser ) throw CustomError.badRequest('user already exist');

        try{
            //const user = new User(registerDto);
        }catch(error){
            throw CustomError.internalServer('${error}');
        }

    }

    public async loginUser( loginDto: LoginUserDto){
        const user = await prisma.sec_users.findFirst({ where: { login: loginDto.login} })
        
        if ( !user ) throw CustomError.badRequest('El usuario no existe.');

        const isMatch =   CryptoAdapter.compare(loginDto.pswd, user.pswd)
        console.log(isMatch);
        if( !isMatch) throw CustomError.badRequest('La Clave no es correcta.');

        const  datos = User.fromObject(user);
        console.log(parseInt(datos.employee_code))
        const  datoext = await prisma.agr_payroll_sup.findMany({ where: { fcpy_employee_id: parseInt(datos.employee_code)}})

        const token = await JwtAdapter.generateToken({ id: user.id, login: user.login });
        if ( !token ) throw CustomError.internalServer('Error while creating JWT')

        return {
            user:  datos,
            comple: datoext,
            token: token,
        }

    }

    public validarToken = async(token:string) => {
      /*  const payload = await JwtAdapter.validateToken(token)
        if ( !payload) throw CustomError.unauthorized('Token invalido.')
        const { login } = payload as { login: string};

        if (!login) throw CustomError.internalServer('El usuario no se relaciona')
        
        return true;*/
    }
}