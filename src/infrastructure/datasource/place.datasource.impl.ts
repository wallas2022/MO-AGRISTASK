import { prisma } from "../../data/postgres";
import { placeDataSource } from "../../domain/datasources/place.datasource";
import { Place } from "../../domain/entities/place.entity";





export class PlaceDatasourceImpl implements placeDataSource{

    async getAll(): Promise<Place[]> {
         const places = await prisma.agr_places.findMany();
         return places.map( place => Place.fromObject(place));
        }
    
    
     async findById(id: number): Promise<Place> {
         const place = await  prisma.agr_places.findFirst({
              where: { id }
             });
             if (!place) throw `Places  With id ${ id } not found`;
             //console.log(employee)
             return Place.fromObject(place);   
     }
 
 
    
 }