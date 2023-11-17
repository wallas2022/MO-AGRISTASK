import { Request, Response } from 'express';
import { GetOrder, GetOrders } from "../../domain";
import { ProductionorderRepositoryImpl } from "../../infrastructure/repositories/productionorder.respository.impl";






export class OrderController {


    constructor(
        private readonly placeRepository: ProductionorderRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetOrders( this.placeRepository)
        .execute()
        .then( order => res.json(order))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetOrder( this.placeRepository)
        .execute(id)
        .then( place => res.json(place))
        .catch( error => res.status(400).json( {error}))
    }

}