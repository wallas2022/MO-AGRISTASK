import { prisma } from "../../data/postgres";
import { activityDataSource } from "../../domain/datasources/activity.datasource";
import { Activity } from "../../domain/entities/activity.entity";





export class ActivityDatasourceImpl implements activityDataSource{

    async getAll(): Promise<Activity[]> {
         const activities = await prisma.fcpy_activities.findMany();
         return activities.map( activity => Activity.fromObject(activity));
        }
    
    
     async findById(id: number): Promise<Activity> {
         const activity = await  prisma.fcpy_activities.findFirst({
              where: { id }
             });
             if (!activity) throw `Places  With id ${ id } not found`;
             //console.log(employee)
             return Activity.fromObject(activity);   
     }
 
 
    
 }