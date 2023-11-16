import { Jobposition } from "../../entities/jobposition.entity";
import { jobpositionRepository } from "../../repositories/jobposition.repositroy";




export interface GetJobpostionUseCase {


    execute( id: number ): Promise<Jobposition>

}

export class GetJobposition implements GetJobpostionUseCase {

    constructor(
        private readonly repository: jobpositionRepository,
    ){}

    execute(id: number): Promise<Jobposition> {
        return this.repository.findById(id);
        
    }

}