
import { prisma } from "../../data/postgres";
import { groupDataSource } from "../../domain/datasources/group.datasource";
import { Group } from "../../domain/entities/group.entity";



export class GroupDatasourceImpl implements groupDataSource{

    async getAll(): Promise<Group[]> {
         const groups = await prisma.fcpy_groups.findMany();
         return groups.map( group => Group.fromObject(group));
        }
    
    
     async findById(id: number): Promise<Group> {
         const group = await  prisma.fcpy_groups.findFirst({
              where: { id }
             });
             if (!group) throw `Groups  With id ${ id } not found`;
             //console.log(employee)
             return Group.fromObject(group);   
     }
 
 
    
 }