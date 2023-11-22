import { prisma } from "../../data/postgres";
import { tariffDataSource } from "../../domain/datasources/tariff.datasoruce";
import { Tariff } from "../../domain/entities/tariff.entity";






export class TariffDatasourceImpl implements tariffDataSource{

    async getAll(): Promise<Tariff[]> {
         const tariffs = await prisma.fcpy_tariffs.findMany({
      
            
            
         });
         const datos =  tariffs.map( tariff => Tariff.fromObject(tariff));
         ///console.log(datos)
         return datos;
        }
    
    
     async findById(id: number): Promise<Tariff> {
         const tariff = await  prisma.fcpy_tariffs.findFirst({
          
              where: { id },
            
            
             });
             if (!tariff) throw `Tariff  With id ${ id } not found`;
           const datos = Tariff.fromObject(tariff); 
          // console.log(datos)
             return Tariff.fromObject(tariff);   
     }
    }