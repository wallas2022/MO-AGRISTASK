import { Request, Response } from 'express';
import {   GetWrokcenters,  workcenterRepository } from "../../domain";
import { GetWorkcenter } from '../../domain/use-cases/workcenter/get-workcenter';



export class WorkcenterController {


    constructor(
        private readonly workcenterRepository: workcenterRepository
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetWrokcenters( this.workcenterRepository)
        .execute()
        .then( workcenter => res.json(workcenter))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetWorkcenter( this.workcenterRepository)
        .execute(id)
        .then( workcenter => res.json(workcenter))
        .catch( error => res.status(400).json( {error}))
    }

}