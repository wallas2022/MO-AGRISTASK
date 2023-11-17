import { Costecenter } from "../entities/costcenter.entity";



export abstract class costeCenterDataSource {


    abstract getAll(): Promise<Costecenter[]>;
    abstract findById(id: number): Promise<Costecenter>;



}