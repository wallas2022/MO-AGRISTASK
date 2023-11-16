


export class Employee {

    constructor(
        public id: number,
        public alternative_code: string,
        public names: string,
        public last_names: string,
        public type: string,
        public status: string,
        public model_data: string,
        public fcpy_payroll_id: number,
        public fcpy_job_position_id: number,
        public created_at?: Date|null,
        public updated_at?: Date|null,

    ){}

    public static fromObject( object: {[key: string] : any}){
        const {id,alternative_code,names,last_names,type,status,model_data,fcpy_job_position_id,fcpy_payroll_id,created_at,updated_at} = object
        return new Employee(id,alternative_code,names,last_names,type,status,model_data,fcpy_job_position_id,fcpy_payroll_id,created_at,updated_at)
    } 
}