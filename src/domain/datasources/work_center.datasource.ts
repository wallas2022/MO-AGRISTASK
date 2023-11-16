import { Fworkcenter } from "../index";



export abstract class workcenterDataSource {


    abstract getAll(): Promise<Fworkcenter[]>;
    abstract findById(id: number): Promise<Fworkcenter>;



}