import { Tariff } from "../../entities/tariff.entity";
import { tariffRepository } from "../../repositories/tariff.repository";







export interface GetTariffUseCase {


    execute( id: number ): Promise<Tariff>

}

export class GetTariff implements GetTariffUseCase {

    constructor(
        private readonly repository: tariffRepository,
    ){}

    execute(id: number): Promise<Tariff> {
        return this.repository.findById(id);
        
    }

}