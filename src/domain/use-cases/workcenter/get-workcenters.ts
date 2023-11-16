
import { workcenterRepository } from "../../repositories/workcenter.repository";
import { Fworkcenter } from "../../entities/fworkcenter.entity";

export interface GetWorkcentersUseCase {


    execute( ): Promise<Fworkcenter[]>

}

export class GetWrokcenters implements GetWorkcentersUseCase {

    constructor(
        private readonly repository: workcenterRepository,
    ){}

    execute(): Promise<Fworkcenter[]> {
        return this.repository.getAll();
        
    }







}