import { companyRepository, companyDataSource, Company } from "../../domain";




export  class CompanyRepositoryImpl implements companyRepository{

    constructor(
        private readonly datasource: companyDataSource
    ){}

     getAll(): Promise<Company[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Company> {
         return this.datasource.findById(id);
     }

}