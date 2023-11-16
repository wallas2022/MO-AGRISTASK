import { Jobposition } from "../../domain";
import { JobpositionDataSource } from "../../domain/datasources/jobposition.datasource";
import { jobpositionRepository } from "../../domain/repositories/jobposition.repositroy";





export  class JobpositionRepositoryImpl implements jobpositionRepository {

    constructor(
        private readonly datasource: JobpositionDataSource
    ){}

     getAll(): Promise<Jobposition[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Jobposition> {
         return this.datasource.findById(id);
     }

}