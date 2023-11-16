import { Group } from "../../entities/group.entity";
import { groupRepository } from "../../repositories/group.repository";




export interface GroupUseCase {


    execute( id: number ): Promise<Group>

}

export class GetGroup implements GroupUseCase {

    constructor(
        private readonly repository: groupRepository,
    ){}

    execute(id: number): Promise<Group> {
        return this.repository.findById(id);
        
    }

}