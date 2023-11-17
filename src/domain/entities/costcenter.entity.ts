


export class Costecenter {

    constructor(
        public id: number,
        public fcpy_company_id: number,
        public description: string,
        public abbreviation: string,
        public accountin_nomenclature: string,
        public category: string,
        public created_at?: Date|null,
        public updated_at?: Date|null,
        public apply_order?: boolean,
        public status?: string,
    ){}

    public static fromOject( object: {[key: string] : any}){
        const { id, fcpy_company_id,description,abbreviation,accountin_nomenclature,category,created_at,updated_at,apply_order,status} = object
        return new Costecenter(id,fcpy_company_id,description,abbreviation,accountin_nomenclature,category,created_at,updated_at,apply_order,status)
    }
}