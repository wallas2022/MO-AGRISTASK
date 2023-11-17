import { Request, Response } from 'express';
import { GetPlaning } from "../../domain/use-cases/planning/get-planning";
import { PlanningRepositoryImpl } from "../../infrastructure/repositories/planning.repository.impl";
import { GetPlannings } from '../../domain/use-cases/planning/get-plannings';






export class PlanningController {


    constructor(
        private readonly planningRepository: PlanningRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetPlannings(this.planningRepository)
        .execute()
        .then( planning => res.json(planning))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetPlaning( this.planningRepository)
        .execute(id)
        .then( place => res.json(place))
        .catch( error => res.status(400).json( {error}))
    }

}