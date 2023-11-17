import { Productionorder } from "../entities/productionorder.entity";




export abstract class productionorderDataSource {


    abstract getAll(): Promise<Productionorder[]>;
    abstract findById(id: number): Promise<Productionorder>;



}