import { Router } from "express";
import { JobpositionDatasourceImpl } from "../../infrastructure/datasource/jobposition.datasource.impl";
import { JobpositionRepositoryImpl } from "../../infrastructure/repositories/jobposition.repository.impl";
import { JobpositionController } from "./controller";






export class  JobpositionRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new JobpositionDatasourceImpl;
       const jobpositionRepository = new JobpositionRepositoryImpl(datasourcePg)
       const jobpositionController = new JobpositionController(jobpositionRepository)

       router.get('/', jobpositionController.getAll);
       router.get('/:id', jobpositionController.findById);

       return router;
    }

}