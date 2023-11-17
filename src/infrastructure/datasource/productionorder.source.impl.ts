import { prisma } from "../../data/postgres";
import { Productionorder, productionorderDataSource } from "../../domain";







export class ProductionorderDatasourceImpl implements productionorderDataSource {

    async getAll(): Promise<Productionorder[]> {
         const orderps = await prisma.fcpy_production_orders.findMany();
         return orderps.map( order => Productionorder.fromObject(order))
        }
    
    
     async findById(id: number): Promise<Productionorder> {
         const orderp = await  prisma.fcpy_production_orders.findFirst({
              where: { id }
             });
             if (!orderp) throw `Production order  With id ${ id } not found`;
             //console.log(employee)
             return Productionorder.fromObject(orderp);   
     }
 
 
    
 }