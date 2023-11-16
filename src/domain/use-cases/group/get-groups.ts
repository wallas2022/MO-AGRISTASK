import { Group } from "../../entities/group.entity";
import { groupRepository } from "../../repositories/group.repository";




export interface GetGroupsUseCase {


    execute( ): Promise<Group[]>

}

export class GetGroups implements GetGroupsUseCase {

    constructor(
        private readonly repository: groupRepository
    ){}

    execute(): Promise<Group[]> {
        return this.repository.getAll();
        
    }


}