import { Productionorder } from "../entities/productionorder.entity";




export abstract class productionorderRepository {


    abstract getAll(): Promise<Productionorder[]>;
    abstract findById( id: number): Promise<Productionorder>;


}