
import { Fworkcenter } from "../../entities/fworkcenter.entity";
import { workcenterRepository } from "../../repositories/workcenter.repository";


export interface GetWorkcenterUseCase {


    execute( id: number ): Promise<Fworkcenter>

}

export class GetWorkcenter implements GetWorkcenterUseCase {

    constructor(
        private readonly repository: workcenterRepository,
    ){}

    execute(id: number): Promise<Fworkcenter> {
        return this.repository.findById(id);
        
    }







}