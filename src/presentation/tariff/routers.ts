import { Router } from "express";
import { TariffDatasourceImpl } from "../../infrastructure/datasource/tariff.datasource.impl";
import { TariffRepositoryImpl } from "../../infrastructure/repositories/tariff.repository.impl";
import { TariffController } from "./controller";




export class  TariffRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new TariffDatasourceImpl
       const tariffRepository = new TariffRepositoryImpl(datasourcePg)
       const tariffController = new TariffController(tariffRepository)

       router.get('/', tariffController.getAll);
       router.get('/:id', tariffController.findById);

       return router;
    }

}