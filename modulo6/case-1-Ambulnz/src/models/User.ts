export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface IUserDB {
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
}

export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) {}

    public getId = () => {
        return this.id
    }

    public getEmail = () => {
        return this.email
    }

    public getPassword = () => {
        return this.password
    }

    public getRole = () => {
        return this.role
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setEmail = (newEmail: string) => {
        this.email = newEmail
    }

    public setPassword = (newPassword: string) => {
        this.password = newPassword
    }

    public setRole = (newRole: USER_ROLES) => {
        this.role = newRole
    }
}