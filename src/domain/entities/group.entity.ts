


export class Group {
    constructor(
        public id: number,
        public fcpy_category_id?: number,
        public name?: string,
        public item?: string,
        public created_at?: Date|null, 
        public updated_at?: Date|null
    ){}

    public static fromObject( object: {[key: string] : any}){
        const {id,name,fcpy_category_id,item,created_at,updated_at} = object
        return new Group(id,name,fcpy_category_id,item,created_at,updated_at)
    }
}