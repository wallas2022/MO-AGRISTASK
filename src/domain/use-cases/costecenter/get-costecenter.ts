import { Costecenter } from "../../entities/costcenter.entity";
import { centercosteRepository } from "../../repositories/costecenter.repository";






export interface GetCostecenterUseCase {


    execute( id: number ): Promise<Costecenter>

}

export class GetCostecenter implements GetCostecenterUseCase {

    constructor(
        private readonly repository: centercosteRepository
    ){}

    execute(id: number): Promise<Costecenter> {
        return this.repository.findById(id);
        
    }

}