import { Request, Response } from 'express';
import { GetEmployees } from "../../domain/use-cases/employee/get-employees";
import { EmployeeRepositoryImpl } from "../../infrastructure/repositories/employee.repository.impl";
import { GetEmployee } from '../../domain/use-cases/employee/get-employee';





export class EmployeeController {


    constructor(
        private readonly employeeRepository: EmployeeRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetEmployees( this.employeeRepository)
        .execute()
        .then( employee => res.json(employee))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetEmployee( this.employeeRepository)
        .execute(id)
        .then( employee => res.json(employee))
        .catch( error => res.status(400).json( {error}))
    }

}