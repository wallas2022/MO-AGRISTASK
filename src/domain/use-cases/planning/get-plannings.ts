import { Planning } from "../../entities/planning.entity";
import { planningRepository } from "../../repositories/planning.repository";




export interface GetPlanningsUseCase {


    execute( supervisor: number ): Promise<Planning[]>

}

export class GetPlannings implements GetPlanningsUseCase {

    constructor(
        private readonly repository: planningRepository
    ){}

    execute(supervisor: number): Promise<Planning[]> {
        return this.repository.getAll(supervisor);
        
    }


}