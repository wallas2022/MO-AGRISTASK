import { Fworkcenter } from "../entities/fworkcenter.entity";







export abstract class workcenterRepository {


    abstract getAll(): Promise<Fworkcenter[]>;
    abstract findById( id: number): Promise<Fworkcenter>;


}