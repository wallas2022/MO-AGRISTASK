import { Router } from "express";
import { PayrollDatasourceImpl } from "../../infrastructure/datasource/payroll.datasoruce.impl";
import { PayrollRepositoryImpl } from "../../infrastructure/repositories/payroll.respository.impl";
import { PayrollController } from "./controller";





export class  PayrollRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new PayrollDatasourceImpl();
       const payrollRepository = new PayrollRepositoryImpl(datasourcePg)
       const payRollController = new PayrollController(payrollRepository)

       router.get('/', payRollController.getAll);
       router.get('/:id', payRollController.findById);

       return router;
    }

}