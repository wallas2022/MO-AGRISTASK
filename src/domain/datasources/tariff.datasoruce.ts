import { Tariff } from "../entities/tariff.entity";



export abstract class tariffDataSource {


    abstract getAll(): Promise<Tariff[]>;
    abstract findById(id: number): Promise<Tariff>;



}