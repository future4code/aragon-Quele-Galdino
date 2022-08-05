import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes()

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            res.status(200).send({ recipes })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public createRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const { title, description } = req.body
            if (!token) {
                errorCode = 401
                throw new Error("Token ausente")
            }
            const payload = new Authenticator().getTokenPayload(token)
            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            }
            if (!title || !description) {
                errorCode = 422
                throw new Error("parametro faltando")
            }
            if (title !== "string" || description !== "string") {
                errorCode = 415
                throw new Error("tipo de dado incorreto")
            }
            if (title.length < 3) {
                errorCode = 422
                throw new Error("Título deve possuir 3 ou mais caracteres.")
            }
            if (!description) {
                errorCode = 422
                throw new Error("A descrição deve possuir 10 ou mais caracteres.")
            }
            const id = new IdGenerator().generate()
            const newRecipe = new Recipe(id, title, description, new Date(), new Date(), payload.id)
            await new RecipeDatabase().createRecipe(newRecipe)
            res.status(201).send({ message: "Receita criada com sucesso", newRecipe })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id
            const {title, description} = req.body
            if(!token){
errorCode = 422
throw new Error ("ausencia de um parametro")

            }
            const payload = new Authenticator().getTokenPayload(token)
            if(!payload){
errorCode = 401
throw new Error ("token invalido")
            }
          if (! title && !description){
errorCode = 422
throw new Error ("paràmetros ausentes")
          }  
          if (title && typeof title !== "string"){
errorCode = 422
throw new Error ("title tem que ser uma string")
          }
          if (description && typeof description !== "string"){
errorCode = 422
throw new Error ("description tem que ser uma string")
          }
          if (title && title.length <3) {
throw new Error ("title deve possuir ao menos 3 caracteres")
          }
if (description && description.length <10){
throw new Error ("description deve ter ao menos 10 caracteres")
}
const recipe = await new RecipeDatabase().findById(id)
if (!recipe ){
errorCode = 404
throw new Error ("id não encontrada")
}
if (payload.role === USER_ROLES.NORMAL){
if (payload.id !== recipe.creator_id){
errorCode = 403
throw new Error ("apenas admins podem editar as receitas que não sejam as suas")
}

}
const newRecipe = new Recipe (recipe.id,
    recipe.title,
    recipe.description,
    recipe.created_at,
    (recipe.updated_at = new Date()),
    recipe.creator_id
    )
    title && newRecipe.setTitle(title)
    description && newRecipe.setDescription(description)
    await new RecipeDatabase().editRecipe(newRecipe)
    res.status(201).send({message: "receita criada com sucesso"}), 
}catch (error) {
            
        }
    }
}
