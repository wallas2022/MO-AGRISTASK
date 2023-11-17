import { Productionorder } from "../../entities/productionorder.entity";
import { productionorderRepository } from "../../repositories/productionorder.repository";





export interface GetOrderUseCase {


    execute( id: number ): Promise<Productionorder>

}

export class GetOrder implements GetOrderUseCase {

    constructor(
        private readonly repository: productionorderRepository,
    ){}

    execute(id: number): Promise<Productionorder> {
        console.log(this.repository.findById(id))
        return this.repository.findById(id);
        
    }

}