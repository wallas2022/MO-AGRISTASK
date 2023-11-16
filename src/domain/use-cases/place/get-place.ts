import { Place } from "../../entities/place.entity";
import { placeRepository } from "../../repositories/place.repository";




export interface GetPlaceUseCase {


    execute( id: number ): Promise<Place>

}

export class GetPlace implements GetPlaceUseCase {

    constructor(
        private readonly repository: placeRepository,
    ){}

    execute(id: number): Promise<Place> {
        return this.repository.findById(id);
        
    }

}