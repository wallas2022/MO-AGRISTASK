import { Request, Response } from 'express';
import { JobpositionRepositoryImpl } from "../../infrastructure/repositories/jobposition.repository.impl";
import { GetJobposition, GetJobpositions } from '../../domain';





export class JobpositionController {


    constructor(
        private readonly jobpositionRepository: JobpositionRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetJobpositions( this.jobpositionRepository)
        .execute()
        .then( jobpositions => res.json(jobpositions))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetJobposition( this.jobpositionRepository)
        .execute(id)
        .then( jobposition => res.json(jobposition))
        .catch( error => res.status(400).json( {error}))
    }

}