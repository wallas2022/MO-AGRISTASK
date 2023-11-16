
import { payrollDataSource } from "../../domain/datasources/payroll.datasource";
import { Payroll } from "../../domain/entities/payroll.entity";
import { payrollRepository } from "../../domain/repositories/payroll.repository";





export  class PayrollRepositoryImpl implements payrollRepository {

    constructor(
        private readonly datasource: payrollDataSource
    ){}

     getAll(): Promise<Payroll[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Payroll> {
         return this.datasource.findById(id);
     }

}