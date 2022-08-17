import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { RequestError } from "../errors/RequestError";
import { ICreateShowInputDTO, IGetShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) => {
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization,
                band: req.body.band,
starts_at: new Date()
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao criar post" })
        }
    }

    public getShows = async (req: Request, res: Response) => {
        try {
            const input: IGetShowInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.showBusiness.getShows(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar posts" })
        }
    }

    public deleteShow = async (req: Request, res: Response) => {
        try {
            const input: IDeleteShowInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id
            }

            const response = await this.showBusiness.deleteShow(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao deletar post" })
        }
    }

    public removeShow = async (req: Request, res: Response) => {
        try {
            const input: IRemoveShowInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id
            }

            const response = await this.showBusiness.removeShow(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao remover like de post" })
        }
    }

}