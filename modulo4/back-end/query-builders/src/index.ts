import express, { Request, Response } from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { TABLE_PERFUMES } from "./database/tableNames";
import { createPerfume } from "./endpoints/createPerfume";
import { getPerfumes } from "./endpoints/getPerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

// Implemente seus endpoints abaixo

app.post ("/perfumes", createPerfume)
app.get ("/perfumes", getPerfumes)
app.put ("/perfumes", getPerfumes)
