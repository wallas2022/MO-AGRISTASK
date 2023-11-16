import { Router } from "express";
import { EmployeeDatasourceImpl } from "../../infrastructure/datasource/employee.datasoruce.impl";
import { EmployeeRepositoryImpl } from "../../infrastructure/repositories/employee.repository.impl";
import { EmployeeController } from "./controller";






export class  EmployeeRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new EmployeeDatasourceImpl
       const employeeRepository = new EmployeeRepositoryImpl(datasourcePg)
       const employeeController = new EmployeeController(employeeRepository)

       router.get('/', employeeController.getAll);
       router.get('/:id', employeeController.findById);

       return router;
    }

}