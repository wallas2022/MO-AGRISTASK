import { Jobposition } from "../../entities/jobposition.entity";
import { jobpositionRepository } from "../../repositories/jobposition.repositroy";





export interface GetJobpositionsUseCase {


    execute( ): Promise<Jobposition[]>

}

export class GetJobpositions implements GetJobpositionsUseCase {

    constructor(
        private readonly repository: jobpositionRepository
    ){}

    execute(): Promise<Jobposition[]> {
        return this.repository.getAll();
        
    }


}