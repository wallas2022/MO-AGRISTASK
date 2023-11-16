import { prisma } from "../../data/postgres";
import { employeeDataSource } from "../../domain/datasources/employee.datasource";
import { Employee } from "../../domain/entities/employee.entity";





export class EmployeeDatasourceImpl implements employeeDataSource{

    async getAll(): Promise<Employee[]> {
         const employees = await prisma.fcpy_employees.findMany();
         return employees.map( employee => Employee.fromObject(employee));
        }
    
    
     async findById(id: number): Promise<Employee> {
         const employee = await  prisma.fcpy_employees.findFirst({
              where: { id }
             });
             if (!employee) throw `Empleado  With id ${ id } not found`;
             //console.log(employee)
             return Employee.fromObject(employee);   
     }
 
 
    
 }