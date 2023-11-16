import { Router } from "express";
import { GroupDatasourceImpl } from "../../infrastructure/datasource/group.datasource.impl";
import { GroupRepositoryImpl } from "../../infrastructure/repositories/group.repository.impl";
import { GroupController } from "./controller";




export class  GroupRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new GroupDatasourceImpl()
       const groupRepository = new GroupRepositoryImpl(datasourcePg)
       const groupController = new GroupController(groupRepository)

       router.get('/', groupController.getAll);
       router.get('/:id', groupController.findById);

       return router;
    }

}