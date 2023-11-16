import { Payroll } from "../entities/payroll.entity";



export abstract class payrollDataSource {


    abstract getAll(): Promise<Payroll[]>;
    abstract findById(id: number): Promise<Payroll>;



}