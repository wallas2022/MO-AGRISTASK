import { tariffDataSource } from "../../datasources/tariff.datasoruce";
import { Tariff } from "../../entities/tariff.entity";







export interface GetTariffsUseCase {


    execute( ): Promise<Tariff[]>

}

export class GetTariffs implements GetTariffsUseCase {

    constructor(
        private readonly repository: tariffDataSource
    ){}

    execute(): Promise<Tariff[]> {
        return this.repository.getAll();
        
    }


}