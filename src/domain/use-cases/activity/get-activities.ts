import { activityDataSource } from "../../datasources/activity.datasource";
import { Activity } from "../../entities/activity.entity";






export interface GetActivitiesUseCase {


    execute( ): Promise<Activity[]>

}

export class GetActivities implements GetActivitiesUseCase {

    constructor(
        private readonly repository: activityDataSource
    ){}

    execute(): Promise<Activity[]> {
        return this.repository.getAll();
        
    }


}