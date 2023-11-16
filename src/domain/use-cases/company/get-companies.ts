import { Company } from "../../entities/company.entity";
import { companyRepository } from "../../repositories/company.repository";


export interface GetCompaniesUseCase {


    execute( ): Promise<Company[]>

}

export class GetCompanies implements GetCompaniesUseCase {

    constructor(
        private readonly repository: companyRepository,
    ){}

    execute(): Promise<Company[]> {
        return this.repository.getAll();
        
    }







}