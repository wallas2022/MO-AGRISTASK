import { Request, Response } from 'express';
import { GetGroup } from "../../domain/use-cases/group/get-group";
import { GetGroups } from "../../domain/use-cases/group/get-groups";
import { GroupRepositoryImpl } from "../../infrastructure/repositories/group.repository.impl";



export class GroupController {


    constructor(
        private readonly groupRepository: GroupRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetGroups( this.groupRepository)
        .execute()
        .then( group => res.json(group))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new  GetGroup( this.groupRepository)
        .execute(id)
        .then( group => res.json(group))
        .catch( error => res.status(400).json( {error}))
    }

}