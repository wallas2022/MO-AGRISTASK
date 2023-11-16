


export class Group {
    constructor(
        public id: number,
        public name: string,
        public item: string,
        public created_at?: Date|null, 
        public updated_at?: Date|null
    ){}

    public static fromObject( object: {[key: string] : any}){
        const {id,name,item,created_at,updated_at} = object
        return new Group(id,name,item,created_at,updated_at)
    }
}