import { prisma } from "../../data/postgres";
import { Costecenter, costeCenterDataSource } from "../../domain";




export class CostocenterDatasourceImpl implements costeCenterDataSource {

    async getAll(): Promise<Costecenter[]> {
         const costes = await prisma.fcpy_cost_centers.findMany();
         
         return costes.map( coste => Costecenter.fromOject(coste))
        }
    
    
     async findById(id: number): Promise<Costecenter> {
         const center = await  prisma.fcpy_cost_centers.findFirst({
              where: { id }
             });
             if (!center) throw `Production order  With id ${ id } not found`;
     
             return Costecenter.fromOject(center);   
     }
 
 
    
 }