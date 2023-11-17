

export class Productionorder {

    constructor(
        public id: number,
        public fcpy_company_id: number,
        public series_name: string,
        public doc_num: number,
        public created_at?: Date|null,
        public update_at?: Date|null,
        public status?: string,
    ){}

    public static fromObject( object : {[key: string]: any}){
        const { id,fcpy_company_id,series_name,doc_num,created_at,update_at,status} = object
        return new Productionorder(id,fcpy_company_id,series_name,doc_num,created_at,update_at,status)
    }
}