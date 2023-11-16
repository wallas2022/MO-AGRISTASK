import { Company } from "../../entities/company.entity";
import { companyRepository } from "../../repositories/company.repository";


export interface GetCompanyUseCase {


    execute( id: number): Promise<Company>

}

export class GetCompany implements GetCompanyUseCase {

    constructor(
        private readonly repository: companyRepository,
    ){}

    execute( id: number): Promise<Company> {
        return this.repository.findById(id);
        
    }







}