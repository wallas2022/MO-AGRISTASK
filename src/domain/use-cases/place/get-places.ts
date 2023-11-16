import { Place } from "../../entities/place.entity";
import { placeRepository } from "../../repositories/place.repository";




export interface GetPlacesUseCase {


    execute( ): Promise<Place[]>

}

export class GetPlaces implements GetPlacesUseCase {

    constructor(
        private readonly repository: placeRepository
    ){}

    execute(): Promise<Place[]> {
        return this.repository.getAll();
        
    }


}