import { employeeDataSource } from "../../domain/datasources/employee.datasource";
import { Employee } from "../../domain/entities/employee.entity";
import { employeeRepository } from "../../domain/repositories/employee.repository";






export  class EmployeeRepositoryImpl implements employeeRepository {

    constructor(
        private readonly datasource: employeeDataSource
    ){}

     getAll(): Promise<Employee[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Employee> {
         return this.datasource.findById(id);
     }

}