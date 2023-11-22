

export class Payrollsup {

    constructor(
        public id: number,
        public fcpy_payroll_id?: number,
        public fcpy_employee_id?: number,
        public fcpy_work_center_id?: number,
        public created_at?: Date|null,
        public updated_at?: Date|null,
        public status?: number,
    ){}

 public static fromOject( object: {[key: string]: any}){
    const {id,fcpy_payroll_id,fcpy_work_center_id,created_at,updated_at,status} = object 
    return new Payrollsup(id,fcpy_payroll_id,fcpy_work_center_id,created_at,updated_at,status);

 }
    

}