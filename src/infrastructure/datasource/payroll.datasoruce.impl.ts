import { prisma } from "../../data/postgres";
import { payrollDataSource } from "../../domain/datasources/payroll.datasource";
import { Payroll } from "../../domain/entities/payroll.entity";









export class PayrollDatasourceImpl implements payrollDataSource{

    async getAll(): Promise<Payroll[]> {
         const payrolls = await prisma.fcpy_payrolls.findMany();
         return payrolls.map( payroll => Payroll.fromObject(payroll));
        }
    
    
     async findById(id: number): Promise<Payroll> {
         const payroll = await  prisma.fcpy_payrolls.findFirst({
              where: { id }
             });
             if (!payroll) throw `Campañia  With id ${ id } not found`;
             //console.log(employee)
             return Payroll.fromObject(payroll);   
     }
 
 
    
 }