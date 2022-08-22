import { request, Request, response, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController{
    public signup = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const {nickname, email, password} = req.body
            if (!nickname || !email || !password){
                throw new Error("parametro faltando")
            }
            const id = new IdGenerator().generate()
            const user = new User(id, nickname, email, password)
            await new UserDatabase().createUser(user)
            const payload: ITokenPayload ={id: user.getId()}
            const token = new Authenticator().generateToken(payload)
res.status(201).send({message: "usuario criado com sucesso", token})
            
        } catch (error) {
            if (typeof error.message === "string" && error.message.includes("Duplicate entry")){
                return res.status(409).send("cadastro existente")
            }
            res.status(errorCode).send({message: error.message})
        }
    } 

public login = async (req: Request, res: Response) => {
let errorCode = 400
try {
    const email = req.body.email
    const password = req.body.password

    if(! email || !password ) {
        errorCode = 401
throw new Error("email ou senha faltando")
    }

const userdatabase = new UserDatabase ()
const userDB = await userdatabase.findByEmail(email) 

if(!userDB) {
    errorCode = 401
    throw new Error("Email não cadastrado")

}

} catch (error) {
    
}
}
}
