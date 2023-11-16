import { Activity } from "../entities/activity.entity";



export abstract class activityDataSource {


    abstract getAll(): Promise<Activity[]>;
    abstract findById(id: number): Promise<Activity>;



}