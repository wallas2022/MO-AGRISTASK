import { Router } from "express";
import { CompanyDatasourceImpl } from "../../infrastructure/datasource/company.datasource.impl";
import {  CompanyRepositoryImpl } from "../../infrastructure/repositories/company.repository.impl";
import { CompanyController } from "./controller";



export class  CompanyRoutes {

     static get routes(): Router {

        const router = Router();
        const datasourcePg = new CompanyDatasourceImpl();
        const companyRepository = new CompanyRepositoryImpl(datasourcePg)
        const companyController = new CompanyController(companyRepository)

        router.get('/', companyController.getAll);
        router.get('/:id', companyController.findbyId);

        return router;
     }

}