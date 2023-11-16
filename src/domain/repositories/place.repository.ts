import { Place } from "../entities/place.entity";





export abstract class placeRepository {


    abstract getAll(): Promise<Place[]>;
    abstract findById( id: number): Promise<Place>;


}