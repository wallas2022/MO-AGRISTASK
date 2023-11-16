import { Request, Response } from 'express';
import { PlaceRepositoryImpl } from "../../infrastructure/repositories/place.repository.impl";
import { GetPlace } from '../../domain/use-cases/place/get-place';
import { GetPlaces } from '../../domain/use-cases/place/get-places';




export class PlaceController {


    constructor(
        private readonly placeRepository: PlaceRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetPlaces( this.placeRepository)
        .execute()
        .then( place => res.json(place))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetPlace( this.placeRepository)
        .execute(id)
        .then( place => res.json(place))
        .catch( error => res.status(400).json( {error}))
    }

}