import { Planning } from "../../entities/planning.entity";
import { planningRepository } from "../../repositories/planning.repository";




export interface GetPlanningUseCase {


    execute( id: number ): Promise<Planning>

}

export class GetPlaning implements GetPlanningUseCase {

    constructor(
        private readonly repository: planningRepository,
    ){}

    execute(id: number): Promise<Planning> {
        return this.repository.findById(id);
        
    }

}