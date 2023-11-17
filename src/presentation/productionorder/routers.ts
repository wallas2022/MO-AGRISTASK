import { Router } from "express";
import { ProductionorderRepositoryImpl } from "../../infrastructure/repositories/productionorder.respository.impl";
import { OrderController } from "./controller";
import { ProductionorderDatasourceImpl } from "../../infrastructure/datasource/productionorder.source.impl";






export class  OrderRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new ProductionorderDatasourceImpl()
       const orderRepository = new ProductionorderRepositoryImpl(datasourcePg)
       const orderController = new OrderController(orderRepository)

       router.get('/', orderController.getAll);
       router.get('/:id', orderController.findById);

       return router;
    }

}