import { tariffDataSource } from "../../domain/datasources/tariff.datasoruce";
import { Tariff } from "../../domain/entities/tariff.entity";
import { tariffRepository } from "../../domain/repositories/tariff.repository";



export  class TariffRepositoryImpl implements tariffRepository {

    constructor(
        private readonly datasource: tariffDataSource
    ){}

     getAll(): Promise<Tariff[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Tariff> {
         return this.datasource.findById(id);
     }

}