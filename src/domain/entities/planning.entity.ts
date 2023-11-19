

export class Planning {

    constructor(
        public id: number,
        public fcpy_activity_id: number,
        public fcpy_cost_center_id: number,
        public fcpy_employee_id: number,
        public supervisor: number,
        public fcpy_work_center_id: number,
        public date?: Date|null,
        public created_at?: Date|null,
        public created_by?: number,
        public updated_at?: Date|null,
        public updated_by?: number,
        public status?: number,
        public source?: number,
    ){}

    public static fromOject( object: {[key: string]: any}){
        const {id,fcpy_activity_id,fcpy_cost_center_id,fcpy_employee_id,supervisor,fcpy_work_center_id,date,created_at,created_by,updated_at,updated_by,status,source} = object
      
        return new Planning(id,fcpy_activity_id,fcpy_cost_center_id,fcpy_employee_id,supervisor,fcpy_work_center_id,date,created_at,created_by,updated_at,updated_by,status,source)
    }
}