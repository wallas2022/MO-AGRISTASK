import { Payroll } from "../../entities/payroll.entity";
import { payrollRepository } from "../../repositories/payroll.repository";



export interface GetPayrollsUseCase {


    execute( ): Promise<Payroll[]>

}

export class GetPayrolls implements GetPayrollsUseCase {

    constructor(
        private readonly repository: payrollRepository
    ){}

    execute(): Promise<Payroll[]> {
        return this.repository.getAll();
        
    }


}