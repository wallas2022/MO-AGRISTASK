import { regularExps } from "../../../config";


export class RegisterUserDto {

 private   constructor(
        public  login: string,
        public pswd: string,
        public  email: string
       
    ){}

    static create( object: { [key:string]: any}) : [string?, RegisterUserDto?]{

        const {login, email, pswd} = object;
        if(!login) return ['Missing username'];
        if(!email) return ['Missing email'];
        if(!regularExps.email.test(email)) return ['Email is not valid'];
        if (pswd.length  < 6) return ['Password todo short'];


        return [undefined, new RegisterUserDto( login,pswd,email)]
    }
}