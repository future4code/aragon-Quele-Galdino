import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PRODUCTS, TABLE_PURCHASES } from "../database/tableNames";
import { Product } from "../models/Product";
import { User } from "../models/User";
import { getPorchase } from "../endpoints/getPorchase";

export const createPorchase = async (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const { user, product, quantidy } = req.body
        if (!user || !product) {
throw new Error("useuario ou produto incorreto")
        }

const newPorchase: Porchase = {
            id: Date.now().toString(),
            name,
            quantidy
        }
        wait connection(TABLE_PURCHASES)
.insert({
    id: newPorchase.id,
    name: newPorchase.name,
    price: newPorchase.price,
    quantidy: newPorchase.quantidy
})

res.status(200).send({ product: newPorchase, message: "compra feita com sucesso"})

    } catch(error) {
        res.status(errorCode).send({ message: error.message })
    }



}