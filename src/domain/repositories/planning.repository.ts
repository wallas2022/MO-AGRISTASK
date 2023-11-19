import { Planning } from "../entities/planning.entity";




export abstract class planningRepository {


    abstract getAll(supervisor: number): Promise<Planning[]>;
    abstract findById( id: number): Promise<Planning>;


}