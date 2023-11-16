import { placeDataSource } from "../../domain/datasources/place.datasource";
import { Place } from "../../domain/entities/place.entity";
import { placeRepository } from "../../domain/repositories/place.repository";





export  class PlaceRepositoryImpl implements placeRepository {

    constructor(
        private readonly datasource: placeDataSource
    ){}

     getAll(): Promise<Place[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Place> {
         return this.datasource.findById(id);
     }

}