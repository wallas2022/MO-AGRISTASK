

export class Company {

    constructor(
        public id: number,
        public name: string,
        public created_at?: Date|null, 
        public updated_at?: Date|null

    ){}

    public static fromObject( object: {[key: string] : any}){
        const {id,name,created_at,updated_at} = object;
        return new Company(id,name,created_at,updated_at)
    }
}

