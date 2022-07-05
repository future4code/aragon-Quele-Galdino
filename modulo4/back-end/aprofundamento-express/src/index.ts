//Exercicio 1

//Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “Pong!”.

import express, { Request, Response } from "express";
import cors from "cors"
import { tarefas } from "./exercicio2";

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () => {
    console.log("servidor rodando na porta 3003")
})

app.get("/ping", (req: Request, res: Response) => {
    res.send({ mensagem: "pong!" })
})

//Exercício 3

//Construa um endpoint que retorne todos os afazeres de um determinado usuário.

//Entradas → Identificação do usuário.
//Saídas → Lista de afazeres selecionados por usuário.

//Dicas:
//• Utilize um path params para identificar o usuário selecionado.
//• Utilize o método .filter() para identificar o usuário selecionado.

app.get("/tarefa/:userId", (req: Request, res: Response) => {
    const userId = req.params.userId
    const resultado = tarefas.filter((tarefa) => {
return tarefa.userId === userId
    })
    res.send({
        tarefas:resultado
    })
})
