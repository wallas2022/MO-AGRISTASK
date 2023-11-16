import { prisma } from "../../data/postgres";
import { Fworkcenter } from "../../domain";
import { workcenterDataSource } from "../../domain/datasources/work_center.datasource";








export class WorkcenterDatasourceImpl implements workcenterDataSource {

   async getAll(): Promise<Fworkcenter[]> {
        const workcenters = await prisma.fcpy_work_centers.findMany();
        return workcenters.map( workcenter => Fworkcenter.fromObject(workcenter))
       }
   
   
    async findById(id: number): Promise<Fworkcenter> {
        const workcenter = await  prisma.fcpy_work_centers.findFirst({
             where: { id }
            });
            if (!workcenter) throw `Campañia  With id ${ id } not found`;
            //console.log(employee)
            return Fworkcenter.fromObject(workcenter);   
    }


   
}