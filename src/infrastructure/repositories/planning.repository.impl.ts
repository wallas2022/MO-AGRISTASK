import { planningDataSource } from "../../domain/datasources/planning.datasource";
import { Planning } from "../../domain/entities/planning.entity";
import { planningRepository } from "../../domain/repositories/planning.repository";






export  class PlanningRepositoryImpl implements planningRepository {

    constructor(
        private readonly datasource: planningDataSource
    ){}

     getAll(): Promise<Planning[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Planning> {
         return this.datasource.findById(id);
     }

}