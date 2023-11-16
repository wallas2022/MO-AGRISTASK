import { Activity } from "../entities/activity.entity";






export abstract class activityRepository {


    abstract getAll(): Promise<Activity[]>;
    abstract findById( id: number): Promise<Activity>;


}