import { Router } from "express";
import { PlaceDatasourceImpl } from "../../infrastructure/datasource/place.datasource.impl";
import { PlaceRepositoryImpl } from "../../infrastructure/repositories/place.repository.impl";
import { PlaceController } from "./controller";







export class  PlaceRoutes {

    static get routes(): Router {

       const router = Router();
       const datasourcePg = new PlaceDatasourceImpl()
       const placeRepository = new PlaceRepositoryImpl(datasourcePg)
       const placeController = new PlaceController(placeRepository)

       router.get('/', placeController.getAll);
       router.get('/:id', placeController.findById);

       return router;
    }

}