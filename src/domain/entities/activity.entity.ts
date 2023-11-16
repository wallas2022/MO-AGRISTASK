

export class Activity {

    constructor(
        public id: number,
        public name?: string,
        public abbreviation?: string,
        public subclasification?: string,
        public measurement_unit?: string,
        public created_at?: Date|null,
        public updated_at?: Date|null,
        public aplica_extra?: number,
        public fcpy_group_id?: number,
    ){}

    public static fromObject( object : {[key: string] : any }){
        const {id,name,abbreviation,subclasification,measurement_unit,created_at,updated_at,aplica_extra,fcpy_group_id} = object
        return new Activity(id,name,abbreviation,subclasification,measurement_unit,created_at,updated_at,aplica_extra,fcpy_group_id)
    }


}