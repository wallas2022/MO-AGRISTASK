import { Tariff } from "../entities/tariff.entity";




export abstract class tariffRepository {


    abstract getAll(): Promise<Tariff[]>;
    abstract findById( id: number): Promise<Tariff>;


}