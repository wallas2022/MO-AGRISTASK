import { Request, Response } from 'express';
import { GetActivities } from "../../domain/use-cases/activity/get-activities";
import { GetActivity } from "../../domain/use-cases/activity/get-activity";
import { ActivityRepositoryImpl } from "../../infrastructure/repositories/activity.repository.impl";





export class ActivityController {


    constructor(
        private readonly activityRepository: ActivityRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetActivities( this.activityRepository)
        .execute()
        .then( activity => res.json(activity))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetActivity(this.activityRepository)
        .execute(id)
        .then( activity => res.json(activity))
        .catch( error => res.status(400).json( {error}))
    }

}