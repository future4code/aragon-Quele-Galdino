import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ping } from './endpoints/ping';
import { products, users } from './database/data';
import { getUser } from './endpoints/getUser';
import { getProduct } from './endpoints/getProduct';
import { getPorchase } from './endpoints/getPorchase';

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.get("/ping", ping)
app.get("/users", getUser)
app.get("/products", getProduct)
app.get("/porchase", getPorchase)
app.post("/user", getUser)
app.post("/product", getProduct)
app.post("/porchase", getPorchase)
