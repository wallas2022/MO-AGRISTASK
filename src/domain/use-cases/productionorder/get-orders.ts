import { Productionorder } from "../../entities/productionorder.entity";
import { productionorderRepository } from "../../repositories/productionorder.repository";




export interface GetOrdersUseCase {


    execute( ): Promise<Productionorder[]>

}

export class GetOrders implements GetOrdersUseCase {

    constructor(
        private readonly repository: productionorderRepository
    ){}

    execute(): Promise<Productionorder[]> {
        return this.repository.getAll();
        
    }


}