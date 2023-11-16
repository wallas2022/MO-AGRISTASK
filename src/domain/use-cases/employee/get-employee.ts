import { Employee } from "../../entities/employee.entity";
import { employeeRepository } from "../../repositories/employee.repository";






export interface GetEmployeeUseCase {


    execute( id: number ): Promise<Employee>

}

export class GetEmployee implements GetEmployeeUseCase {

    constructor(
        private readonly repository: employeeRepository,
    ){}

    execute(id: number): Promise<Employee> {
        return this.repository.findById(id);
        
    }

}