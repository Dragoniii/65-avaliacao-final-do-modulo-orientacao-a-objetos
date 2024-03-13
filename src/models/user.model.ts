import { randomUUID } from 'crypto';


export class User{
    private _id: string
    private _name: string
    private _email: string
    private _userName: string
    private _password: string

    constructor(name: string, email: string, userName: string, password: string) {
        this._id = randomUUID()
        this._name = name
        this._email = email
        this._userName = userName
        this._password = password
    }

    public get id() {
        return this._id
    }
    public get name() {
        return this._name
    }
    public get email() {
        return this._email
    }
    public get userName() {
        return this._userName
    }
    public get password() {
        return this._password
    }
}