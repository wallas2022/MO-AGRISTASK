import { Router } from "express";
import { CostocenterDatasourceImpl } from "../../infrastructure/datasource/costecenter.datasource.impl";
import { CostecenterRepositoryImpl } from "../../infrastructure/repositories/costecenter.repository.impl";
import { CostecenterController } from "./controller";





export class  CostecenterRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new CostocenterDatasourceImpl
       const costeRepository = new CostecenterRepositoryImpl(datasourcePg)
       const costepController = new CostecenterController(costeRepository)

       router.get('/', costepController.getAll);
       router.get('/:id', costepController.findById);

       return router;
    }

}