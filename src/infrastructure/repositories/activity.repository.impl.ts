import { activityDataSource } from "../../domain/datasources/activity.datasource";
import { Activity } from "../../domain/entities/activity.entity";
import { activityRepository } from "../../domain/repositories/activity.repository";





export  class ActivityRepositoryImpl implements activityRepository {

    constructor(
        private readonly datasource: activityDataSource
    ){}

     getAll(): Promise<Activity[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Activity> {
         return this.datasource.findById(id);
     }

}