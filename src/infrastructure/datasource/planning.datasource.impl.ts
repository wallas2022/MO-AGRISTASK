import { prisma } from "../../data/postgres";
import { planningDataSource } from "../../domain/datasources/planning.datasource";
import { Planning } from "../../domain/entities/planning.entity";






export class PlanningDatasourceImpl implements planningDataSource{

    async getAll(supervisor: number): Promise<Planning[]> {
         const plannings = await prisma.agr_plannings.findMany({
      
            where: { supervisor },
            
         });
         const datos =  plannings.map( planning => Planning.fromOject(planning));
         ///console.log(datos)
         return datos;
        }
    
    
     async findById(id: number): Promise<Planning> {
         const planning = await  prisma.agr_plannings.findFirst({
          
              where: { id },
            
            
             });
             if (!planning) throw `Planning  With id ${ id } not found`;
           const datos = Planning.fromOject(planning); 
          // console.log(datos)
             return Planning.fromOject(planning);   
     }
 
 
    
 }