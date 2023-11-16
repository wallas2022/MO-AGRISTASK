

export class Fworkcenter {

    constructor(
        public id: number,
        public name: string,
        public created_at?: Date|null,
        public updated_at?: Date|null,
        public fcpy_company_id?: number,

    ){}

    public static fromObject( object: {[key: string] : any}){
        const {id,name,created_at,updated_at, fcpy_company_id} = object;
        return new Fworkcenter(id,name,created_at,updated_at, fcpy_company_id)
    }


}