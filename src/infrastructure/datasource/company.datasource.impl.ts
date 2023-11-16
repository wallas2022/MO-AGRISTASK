import { prisma } from "../../data/postgres";
import {Company,companyDataSource} from "../../domain";






export class CompanyDatasourceImpl implements companyDataSource {

   async getAll(): Promise<Company[]> {
        const companies = await prisma.fcpy_companies.findMany();
        return companies.map( compania => Company.fromObject(compania))
       }
   
   
    async findById(id: number): Promise<Company> {
        const company = await  prisma.fcpy_companies.findFirst({
             where: { id }
            });
            if (!company) throw `Campañia  With id ${ id } not found`;
            //console.log(employee)
            return Company.fromObject(company);   
    }


   
}