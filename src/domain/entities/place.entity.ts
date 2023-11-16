


export class Place {
    constructor(
        public id: number,
        public fcpy_company_id?: number,
        public name?: string,
        public imagen?: string,
        public lng?: string,
        public lat?: string,
    ){}

    public static fromObject( object: {[ key: string] : any}){
        const {id,fcpy_company_id,name,imagen,lng,lat} = object
        return new Place(id,fcpy_company_id,name,imagen,lng,lat)
    }
}