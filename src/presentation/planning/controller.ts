import { Request, Response } from 'express';
import { GetPlaning } from "../../domain/use-cases/planning/get-planning";
import { PlanningRepositoryImpl } from "../../infrastructure/repositories/planning.repository.impl";
import { GetPlannings } from '../../domain/use-cases/planning/get-plannings';






export class PlanningController {


    constructor(
        private readonly planningRepository: PlanningRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        try {
        const supervisor = +req.params.supervisor
 
        new GetPlannings(this.planningRepository)
        .execute(supervisor)
        .then( planning => res.json(planning))
      //  .catch( error => res.status(400).json( { error }))
        } catch(error){
            console.error('Error al obtener usuarios con nombres específicos:', error);
        }
    }

    public findById =  async ( req: Request, res: Response) => {
     try{
        console.log(this.planningRepository)
        const id = +req.params.id;
        const planning =  new GetPlaning(this.planningRepository).execute(id);
        // Llama al método toJSON para realizar la transformación de BigInt a string
        const planningJSON = (await planning).toJSON();
        res.json(planningJSON);
       /* new GetPlaning( this.planningRepository)
        .execute(id)
        .then( plannning => res.json(plannning))*/
      //  .catch( error => res.status(400).json( {error}))
    
    } catch(error){
        console.error('Error al obtener usuarios con nombres específicos:', error);
    }}}

