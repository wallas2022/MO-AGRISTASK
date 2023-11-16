


export class Jobposition {

    constructor(
        public id: number,
        public name: string,
        public fcpy_comapny_id?: number,
        public created_at?: Date|null,
        public updated_at?: Date|null
    ){}



    public static fromObject ( object: {[ key: string]: any}){
       const {id,name,fcpy_comapny_id,created_at,updated_at} = object
       return new Jobposition(id,name,fcpy_comapny_id,created_at,updated_at)
    }




}