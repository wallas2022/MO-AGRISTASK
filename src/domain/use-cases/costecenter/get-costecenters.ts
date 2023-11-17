import { Costecenter } from "../../entities/costcenter.entity";
import { centercosteRepository } from "../../repositories/costecenter.repository";





export interface GetCostecentersUseCase {


    execute( ): Promise<Costecenter[]>

}

export class GetCosteCenters implements GetCostecentersUseCase {

    constructor(
        private readonly repository: centercosteRepository
    ){}

    execute(): Promise<Costecenter[]> {
        return this.repository.getAll();
        
    }


}