

export class Payroll {


    constructor(
        public id: number,
        public code: string,
        public description: string,
        public frecuency: string,
        created_at?: Date|null,
        updated_at?: Date|null,
        fcpy_work_center_id?: number,

    ){}

    public static fromObject( object: {[key: string] : any}){
        const { id, code,description,frecuency,created_at,updated_at,fcpy_work_center_id} = object
        return new Payroll(id,code,description,frecuency,created_at,updated_at,fcpy_work_center_id)
    }

}