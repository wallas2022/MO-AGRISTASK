import { Productionorder, productionorderDataSource, productionorderRepository } from "../../domain";

export  class ProductionorderRepositoryImpl implements productionorderRepository {

    constructor(
        private readonly datasource: productionorderDataSource
    ){}

     getAll(): Promise<Productionorder[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Productionorder> {
         return this.datasource.findById(id);
     }

}