import { randomUUID } from 'crypto';

export class Tweet {
    private _id: string
    private _kind: boolean
    private _statement: string
    private _userID: string

    constructor(kind: boolean, statement: string, userID: string) {
        this._id = randomUUID()
        this._kind = kind
        this._statement = statement
        this._userID = userID
    }

    public get id() {
        return this._id
    }
    public get kind() {
        return this._kind
    }
    public get statement() {
        return this._statement
    }
    public get userID() {
        return this._userID
    }
}