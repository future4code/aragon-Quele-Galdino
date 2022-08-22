import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public createUser = async (element: User) => {
        const userDB: IUserDB = {
            id: element.getId(),
            nickname: element.getNickname(),
            email: element.getEmail(),
            password: element.getPassword()

        }
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB)
    }
    public static TABLE_USERS = "Auth_Users"

    public findByEmail = async (email: string) => {
const result: IUserDB[] = await BaseDatabase
.connection(UserDatabase.TABLE_USERS)
.select().where({email})
return result[0]
    }

    
}