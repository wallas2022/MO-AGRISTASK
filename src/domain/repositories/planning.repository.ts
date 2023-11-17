import { Planning } from "../entities/planning.entity";




export abstract class planningRepository {


    abstract getAll(): Promise<Planning[]>;
    abstract findById( id: number): Promise<Planning>;


}