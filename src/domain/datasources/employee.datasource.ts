import { Employee } from "../entities/employee.entity";

export abstract class employeeDataSource {


    abstract getAll(): Promise<Employee[]>;
    abstract findById(id: number): Promise<Employee>;



}