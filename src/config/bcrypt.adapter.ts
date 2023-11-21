import { compareSync, genSaltSync, hashSync } from "bcryptjs"


export const bcryAdapter = {

    hash: ( password: string) => {
        const salt = genSaltSync();
        return hashSync(password, salt)
    },
    compare: (pasword: string, hashed: string)=>{
        return compareSync(pasword,hashed);
    }
}
