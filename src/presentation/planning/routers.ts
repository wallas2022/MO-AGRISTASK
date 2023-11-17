import { Router } from "express";
import { PlanningDatasourceImpl } from "../../infrastructure/datasource/planning.datasource.impl";
import { PlaceDatasourceImpl } from "../../infrastructure/datasource/place.datasource.impl";
import { PlanningController } from "./controller";
import { PlanningRepositoryImpl } from "../../infrastructure/repositories/planning.repository.impl";




export class  PlanningRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new PlanningDatasourceImpl
       const planingRepository = new PlanningRepositoryImpl(datasourcePg)
       const planningController = new PlanningController(planingRepository)

       router.get('/', planningController.getAll);
       router.get('/:id', planningController.findById);

       return router;
    }

}