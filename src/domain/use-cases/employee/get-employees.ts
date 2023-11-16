import { Employee } from "../../entities/employee.entity";
import { employeeRepository } from "../../repositories/employee.repository";





export interface GetEmployeesUseCase {


    execute( ): Promise<Employee[]>

}

export class GetEmployees implements GetEmployeesUseCase {

    constructor(
        private readonly repository: employeeRepository
    ){}

    execute(): Promise<Employee[]> {
        return this.repository.getAll();
        
    }


}