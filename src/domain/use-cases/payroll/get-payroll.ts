import { Payroll } from "../../entities/payroll.entity";
import { payrollRepository } from "../../repositories/payroll.repository";

export interface GetPayrollUseCase {


    execute( id: number ): Promise<Payroll>

}

export class GetPayroll implements GetPayrollUseCase {

    constructor(
        private readonly repository: payrollRepository,
    ){}

    execute(id: number): Promise<Payroll> {
        return this.repository.findById(id);
        
    }

}