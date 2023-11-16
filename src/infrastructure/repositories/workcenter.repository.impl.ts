import { Fworkcenter, workcenterDataSource, workcenterRepository } from "../../domain";





export  class WorkcenterRepositoryImpl implements workcenterRepository {

    constructor(
        private readonly datasource: workcenterDataSource
    ){}

     getAll(): Promise<Fworkcenter[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Fworkcenter> {
         return this.datasource.findById(id);
     }

}