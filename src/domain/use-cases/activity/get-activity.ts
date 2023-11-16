import { Activity } from "../../entities/activity.entity";
import { activityRepository } from "../../repositories/activity.repository";





export interface GetActivityUseCase {


    execute( id: number ): Promise<Activity>

}

export class GetActivity implements GetActivityUseCase {

    constructor(
        private readonly repository: activityRepository,
    ){}

    execute(id: number): Promise<Activity> {
        return this.repository.findById(id);
        
    }

}