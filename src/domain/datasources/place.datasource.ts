import { Place } from "../entities/place.entity";


export abstract class placeDataSource {


    abstract getAll(): Promise<Place[]>;
    abstract findById(id: number): Promise<Place>;



}