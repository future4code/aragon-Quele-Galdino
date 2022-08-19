import { IGetShowInputDTO, IShowDB, ITicketDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show): IShowDB => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }
        return showDB
    }

    public findShowByDate = async (date: Date): Promise<IShowDB | undefined> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ starts_at: date })
        return result[0]
    }

    public getShow = async (): Promise  <IShowDB[]> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
        return result
    }

    public getTicketsByShowId = async (showId: string): Promise<number> => {
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({ show_id: showId })
        return result.length
    }

    public createShow = async (show: Show): Promise <void> => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }
        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)
    }

    public findShowById = async (id: string): Promise <IShowDB |undefined>=> {
        const showDB: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({ id })
        return showDB[0]
    }

    public updateShow = async (show: Show): Promise <void> => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }
        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .update(showDB)
            .where({ id: showDB.id })
    }

    public deleteShowById = async (id: string): Promise <void> => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .delete()
            .where({ id })
    }
    public findTicket = async (showId: string, userId: string): Promise<ITicketDB | undefined> => {
        const result: ITicketDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({
                show_id: showId,
                user_id: userId
            })

        return result[0]
    }

    public createTicket = async (ticketDB: ITicketDB): Promise<void> => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .insert(ticketDB)
    }

    public deleteTicketById = async (ticketId: string): Promise<void> => {
        await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .delete()
            .where({ id: ticketId })
    }
}
