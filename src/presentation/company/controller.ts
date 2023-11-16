import { Request, Response } from 'express';
import { prisma }  from '../../data/postgres';
import { GetCompanies, GetCompany, companyRepository } from "../../domain";






export class CompanyController {


    constructor(
        private readonly companyRepository: companyRepository
    ){}


    public getAll = ( req: Request, res: Response) => {
        new GetCompanies( this.companyRepository)
        .execute()
        .then( companies => res.json(companies))
        .catch( error => res.status(400).json( { error }))
    }

    public findbyId =  ( req: Request, res: Response) => {

        const id = +req.params.id;
        new GetCompany( this.companyRepository)
        .execute(id)
        .then( company => res.json(company))
        .catch( error => res.status(400).json( {error}))
    }

}