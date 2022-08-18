import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IShowDB, Show } from "../../src/models/Show"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public getShow = async (
    ) => {
        const showDB: IShowDB[] = [{
            id: "101",
            band: "Foo Fiter",
            

        }]

        return showDB
    }

    public createShow = async (show: Show) => {

    }

    public deleteShowById = async (id: string) => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .delete()
            .where({ id })
    }
}

