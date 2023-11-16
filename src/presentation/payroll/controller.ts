import { Request, Response } from 'express';
import { GetPayrolls } from '../../domain/use-cases/payroll/get-payrolls';
import { GetPayroll } from '../../domain/use-cases/payroll/get-payroll';
import { PayrollRepositoryImpl } from '../../infrastructure/repositories/payroll.respository.impl';

export class PayrollController {


    constructor(
        private readonly payrollRepository: PayrollRepositoryImpl
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetPayrolls( this.payrollRepository)
        .execute()
        .then( payroll => res.json(payroll))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetPayroll( this.payrollRepository)
        .execute(id)
        .then( payroll => res.json(payroll))
        .catch( error => res.status(400).json( {error}))
    }

}