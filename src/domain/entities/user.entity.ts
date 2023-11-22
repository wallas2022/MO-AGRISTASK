import { CustomError } from "../errors/custom.error";

export class User {



    constructor(


        public login: string,
        public pswd: string,
        public name: string,
        public email: string,
        public active: string,
        public activation_code: string,
        public priv_admin: string,
        public mfa: string,
        public employee_code: string,
        public id: number
    ){ }

    static fromObject( object: { [key: string]: any}){

        const {login,pswd,name,email,active,activation_code,priv_admin,mfa,employee_code,id} = object;

        if(!id){
            throw CustomError.badRequest('Missing id');
        }
        if(!login){
            throw CustomError.badRequest('Missing username');
        }
        if(!email){
            throw CustomError.badRequest('Missing email');
        }
        if(!pswd){
            throw CustomError.badRequest('Missing password');
        }

        return new User(login,pswd,name,email,active,activation_code,priv_admin,mfa,employee_code,id);

    }
}