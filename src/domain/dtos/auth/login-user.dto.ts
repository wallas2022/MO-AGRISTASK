



export class LoginUserDto {

    private   constructor(
           public  login: string,
           public pswd: string
          
       ){}
   
       static create( object: { [key:string]: any}) : [string?, LoginUserDto?]{
   
           const {login, pswd} = object;
           if(!login) return ['Missing username'];
           if(!pswd) return ['Missing password'];
           if (pswd.length  < 6) return ['Password todo short'];
   
   
           return [undefined, new LoginUserDto( login,pswd)]
       }
   }