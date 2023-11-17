import { Costecenter, centercosteRepository, costeCenterDataSource } from "../../domain";




export  class CostecenterRepositoryImpl implements centercosteRepository {

    constructor(
        private readonly datasource: costeCenterDataSource
    ){}

     getAll(): Promise<Costecenter[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Costecenter> {
         return this.datasource.findById(id);
     }

}