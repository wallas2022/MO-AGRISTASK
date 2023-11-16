import { groupDataSource } from "../../domain/datasources/group.datasource";
import { Group } from "../../domain/entities/group.entity";


export  class GroupRepositoryImpl implements groupDataSource {

    constructor(
        private readonly datasource: groupDataSource
    ){}

     getAll(): Promise<Group[]> {
         return this.datasource.getAll();
     }
     findById(id: number): Promise<Group> {
         return this.datasource.findById(id);
     }

}