

export class Planning {

    constructor(
        public id: number,
        public fcpy_activity_id?: number,
        public fcpy_cost_center_id?: number,
        public fcpy_employee_id?: number,
        public supervisor?: number,
        public fcpy_work_center_id?: number,
        public date?: Date|null,
        public created_at?: Date|null,
        public created_by?: number,
        public updated_at?: Date|null,
        public updated_by?: number,
        public status?: number,
        public source?: number,
    ){}


    // Método para convertir las propiedades BigInt a string antes de la serialización
  public toJSON(): any {
    return {
      id: this.id.toString(),
      fcpy_activity_id: this.fcpy_activity_id?.toString(),
      fcpy_cost_center_id: this.fcpy_cost_center_id?.toString(),
      fcpy_employee_id: this.fcpy_employee_id?.toString(),
      supervisor: this.supervisor?.toString(),
      fcpy_work_center_id: this.fcpy_work_center_id?.toString(),
      date: this.date,
      created_at: this.created_at,
      created_by: this.created_by,
      updated_at: this.updated_at,
      updated_by: this.updated_by?.toString(),
      status: this.status?.toString(),
      source: this.source?.toString(),
    };
  }


 // Método para transformar string o bigint a bigint
private static transformarStringOBigInt(value: string | bigint | undefined): bigint | undefined {
    if (value === undefined || value === null) {
      return undefined;
    }
  
    if (typeof value === 'bigint') {
      return value;
    }
  
    return BigInt(value);
  }
    

    public static fromOject( object: {[key: string]: any}){
        const {id,fcpy_activity_id,fcpy_cost_center_id,fcpy_employee_id,supervisor,fcpy_work_center_id,date,created_at,created_by,updated_at,updated_by,status,source} = object
    
        
        return new Planning(id,fcpy_activity_id,fcpy_cost_center_id,fcpy_employee_id,supervisor,fcpy_work_center_id,date,created_at,created_by,updated_at,updated_by,status,source)
    }

   

}