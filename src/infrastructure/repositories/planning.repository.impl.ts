import { planningDataSource } from "../../domain/datasources/planning.datasource";
import { Planning } from "../../domain/entities/planning.entity";
import { planningRepository } from "../../domain/repositories/planning.repository";






export  class PlanningRepositoryImpl implements planningRepository {

    constructor(
        private readonly datasource: planningDataSource
    ){}

     getAll(supervisor: number): Promise<Planning[]> {
        const datos = this.datasource.getAll(supervisor)
        console.log("regresa datos")
        console.log(datos)
         return this.datasource.getAll(supervisor);
     }
     findById(id: number): Promise<Planning> {
         return this.datasource.findById(id);
     }

}