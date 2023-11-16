import { Router } from "express";
import { WorkcenterDatasourceImpl } from "../../infrastructure/datasource/workcenter.datasource.impl";
import { WorkcenterController } from "./controller";
import { WorkcenterRepositoryImpl } from "../../infrastructure/repositories/workcenter.repository.impl";


export class  WorkcenterRoutes {

     static get routes(): Router {

        const router = Router();
        const datasourcePg = new WorkcenterDatasourceImpl
        const workcenterRepository = new WorkcenterRepositoryImpl(datasourcePg) 
        const workcenterController = new WorkcenterController(workcenterRepository)

        router.get('/', workcenterController.getAll);
        router.get('/:id', workcenterController.findById);

        return router;
     }

}