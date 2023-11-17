import { prisma } from "../../data/postgres";
import { planningDataSource } from "../../domain/datasources/planning.datasource";
import { Planning } from "../../domain/entities/planning.entity";






export class PlanningDatasourceImpl implements planningDataSource{

    async getAll(): Promise<Planning[]> {
         const plannings = await prisma.agr_plannings.findMany();
         return plannings.map( planning => Planning.fromOject(planning));
        }
    
    
     async findById(id: number): Promise<Planning> {
         const planning = await  prisma.agr_plannings.findFirst({
              where: { id }
             });
             if (!planning) throw `Planning  With id ${ id } not found`;
             //console.log(employee)
             return Planning.fromOject(planning);   
     }
 
 
    
 }