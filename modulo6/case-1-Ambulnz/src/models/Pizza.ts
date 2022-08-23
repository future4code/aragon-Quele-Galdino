export interface IPizzaDB {
    id: string,
    pizza: string,
    user_id: string
}

export interface IOrderDB {
    created_at: Date,
    updated_at: Date,
    creator_id: string,
    totalprice: number
}

export class Order {
    constructor(
        private created_at: Date,
        private updated_at: Date,
        private creator_id: string,
        private totalprice: number
    ) { }

    public getCreatedAt = () => {
        return this.created_at
    }

    public getUpdatedAt = () => {
        return this.updated_at
    }

    public getCreatorId = () => {
        return this.creator_id
    }

    public setCreatedAt = (newCreatedAt: Date) => {
        this.created_at = newCreatedAt
    }

    public setUpdatedAt = (newUpdatedAt: Date) => {
        this.updated_at = newUpdatedAt
    }

    public setCreatorId = (newCreatorId: string) => {
        this.creator_id = newCreatorId
    }
}

export class Pizza {
    constructor(
        private id: string,
        private user_id: string,
        private ingredients: string,
        private flavor: string,
        private price: number
    ) { }

    public getPrice = () => {
        return this.price
    }

    public getId = () => {
        return this.id
    }

    public getUserId = () => {
        return this.user_id
    }

    public getPizzas = () => {
        return this.flavor
    }

    public getIngredients = () => {
        return this.ingredients
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setPizza = (newFlavor: string) => {
        this.flavor = newFlavor
    }
}


export interface IGetPizzaInputDTO {
    token: string,
    search?: string,
    sort?: string,
    limit?: number,
    page?: number,
    offset?: number
}

export interface IDeletePizzaInputDTO {
    token: string,
    id: string
}

export interface ICreatePizzaInputDTO {
    token: string,
    id: string,
    user_id: string,
    flavor: string,
    price: number,
    ingredients: string
}

export interface ICreatePizzaOutputDTO {
    message: string,
    pizza: Pizza[]
}

export interface IDeletePizzaOutputDTO {
    id: string,
    message: string
}

export interface IGetPizzaOutputDTO {
    pizza: Pizza[]
}

