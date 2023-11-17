import { Planning } from "../../entities/planning.entity";
import { planningRepository } from "../../repositories/planning.repository";




export interface GetPlanningsUseCase {


    execute( ): Promise<Planning[]>

}

export class GetPlannings implements GetPlanningsUseCase {

    constructor(
        private readonly repository: planningRepository
    ){}

    execute(): Promise<Planning[]> {
        return this.repository.getAll();
        
    }


}