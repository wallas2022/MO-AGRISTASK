import { Request, Response } from 'express';
import { GetTariffs, GetTariff } from "../../domain";
import { tariffRepository } from "../../domain/repositories/tariff.repository";





export class TariffController {


    constructor(
        private readonly tariffRepository: tariffRepository
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetTariffs( this.tariffRepository)
        .execute()
        .then( tariff => res.json(tariff))
        .catch( error => res.status(400).json( { error }))
    }

    public findById =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetTariff( this.tariffRepository)
        .execute(id)
        .then( tariff => res.json(tariff))
        .catch( error => res.status(400).json( {error}))
    }

}