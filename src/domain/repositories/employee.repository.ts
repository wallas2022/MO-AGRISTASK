import { Employee } from "../entities/employee.entity";





export abstract class employeeRepository {


    abstract getAll(): Promise<Employee[]>;
    abstract findById( id: number): Promise<Employee>;


}