import { Costecenter } from "../entities/costcenter.entity";



export abstract class centercosteRepository {


    abstract getAll(): Promise<Costecenter[]>;
    abstract findById( id: number): Promise<Costecenter>;


}