import { Jobposition } from "../entities/jobposition.entity";




export abstract class jobpositionRepository {


    abstract getAll(): Promise<Jobposition[]>;
    abstract findById( id: number): Promise<Jobposition>;


}