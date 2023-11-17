import { Request, Response } from 'express';
import { GetOrder, GetOrders } from "../../domain";
import { ProductionorderRepositoryImpl } from "../../infrastructure/repositories/productionorder.respository.impl";






export class OrderController {


    constructor(
        private readonly orderRepository: ProductionorderRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetOrders( this.orderRepository)
        .execute()
        .then( order => res.json(order))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        console.log(this.orderRepository)
        new GetOrder( this.orderRepository)
        .execute(id)
        .then( order => res.json(order))
        .catch( error => res.status(400).json( {error}))
    }

}