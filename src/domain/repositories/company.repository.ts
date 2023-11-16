import { Company } from "../entities/company.entity";





export abstract class companyRepository {


    abstract getAll(): Promise<Company[]>;
    abstract findById( id: number): Promise<Company>;


}