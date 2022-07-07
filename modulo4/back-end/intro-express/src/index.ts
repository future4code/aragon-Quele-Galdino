import express, { Request, Response } from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () => {
    console.log("servidor rodando na porta 3003")
})
//Exercicio1

app.get("/", (req: Request, res: Response) => {
    res.send({
        mesnagem: "servidor funcionando"
    })
})

