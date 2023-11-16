import { Company } from "../../domain";




export abstract class companyDataSource {


    abstract getAll(): Promise<Company[]>;
    abstract findById(id: number): Promise<Company>;



}