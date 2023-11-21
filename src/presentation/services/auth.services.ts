//import { bcryAdapter } from "../../config";
import { CryptoAdapter } from "../../config";
import { prisma } from "../../data/postgres";
import { CustomError, RegisterUserDto, User } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";



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

        return {
            user:  datos,
            token: 'ABC'
        }

    }
}