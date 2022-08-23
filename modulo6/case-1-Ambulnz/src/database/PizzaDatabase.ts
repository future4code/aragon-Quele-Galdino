import { IPizzaDB, Pizza } from "../models/Pizza"
import { BaseDatabase } from "./BaseDatabase"

export class PizzaDatabase extends BaseDatabase {
    public static TABLE_PIZZAS = "Ambulnz_Pizza"

    public getAllPizzas = async () => {
        const pizzaDB: IPizzaDB[] = await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .select()

        return PizzaDatabase
    }

    public createPizza = async (pizza: Pizza) => {
        const newPizza: IPizzaDB = {
            id: pizza.getId(),
            description: pizza.getDescription(),
            created_at: pizza.getCreatedAt(),
            updated_at: pizza.getUpdatedAt(),
            creator_id: pizza.getCreatorId()
        }
        await BaseDatabase.connection(PizzaDatabase.TABLE_PIZZAS).insert(newPizza)
    }

    public editpizza = async (pizza: Pizza) => {
        const newPizza: IPizzaDB = {
            id: pizza.getId(),
            title: pizza.getTitle(),
            description: recipe.getDescription(),
            created_at: pizza.getCreatedAt(),
            updated_at: recipe.getUpdatedAt(),
            creator_id: pizza.getCreatorId()
        }
        await BaseDatabase
            .connection(PizzaDatabase.TABLE_PIZZAS)
            .update(newPizza)
            .where({ id: newPizza.id })
    }

    public findById = async (id: string) => {
        const result: IPizzaDB[] = await BaseDatabase.connection(PizzaDatabase.TABLE_PIZZASTABLE_PIZZAS)
            .select().where({ id })
        return result[0]
    }

    public deletPizza = async (id: string) => {
        await BaseDatabase.connection(PizzaDatabase.TABLE_PIZZAS)
            .delete().where({ id })
    }
}