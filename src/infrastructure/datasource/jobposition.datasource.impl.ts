import { prisma } from "../../data/postgres";
import { Jobposition } from "../../domain";
import { JobpositionDataSource } from "../../domain/datasources/jobposition.datasource";





export class JobpositionDatasourceImpl implements JobpositionDataSource{

    async getAll(): Promise<Jobposition[]> {
         const jobs = await prisma.fcpy_job_positions.findMany();
         return jobs.map( job => Jobposition.fromObject(job));
        }
    
    
     async findById(id: number): Promise<Jobposition> {
         const job = await  prisma.fcpy_job_positions.findFirst({
              where: { id }
             });
             if (!job) throw `Job position  With id ${ id } not found`;
             //console.log(employee)
             return Jobposition.fromObject(job);   
     }
 
 
    
 }