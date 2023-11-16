import { Group } from "../entities/group.entity";


export abstract class groupDataSource {


    abstract getAll(): Promise<Group[]>;
    abstract findById(id: number): Promise<Group>;



}