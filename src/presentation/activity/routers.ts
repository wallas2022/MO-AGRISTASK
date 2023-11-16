import { Router } from "express";
import { ActivityDatasourceImpl } from "../../infrastructure/datasource/activity.datasource.impl";
import { ActivityRepositoryImpl } from "../../infrastructure/repositories/activity.repository.impl";
import { ActivityController } from "./controller";





export class  ActivityRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new ActivityDatasourceImpl()
       const activityRepository = new ActivityRepositoryImpl(datasourcePg)
       const activityController = new ActivityController(activityRepository)

       router.get('/', activityController.getAll);
       router.get('/:id', activityController.findById);

       return router;
    }

}