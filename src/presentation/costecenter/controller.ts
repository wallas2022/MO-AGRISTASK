import { Request, Response } from 'express';
import { GetCosteCenters } from "../../domain";
import { GetCostecenter } from "../../domain/use-cases/costecenter/get-costecenter";
import { CostecenterRepositoryImpl } from "../../infrastructure/repositories/costecenter.repository.impl";





export class CostecenterController {


    constructor(
        private readonly costeRepository: CostecenterRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetCosteCenters( this.costeRepository)
        .execute()
        .then( coste => res.json(coste))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new  GetCostecenter( this.costeRepository)
        .execute(id)
        .then( center => res.json(center))
        .catch( error => res.status(400).json( {error}))
    }

}