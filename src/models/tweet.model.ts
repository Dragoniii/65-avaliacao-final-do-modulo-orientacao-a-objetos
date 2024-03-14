import { randomUUID } from 'crypto';

export class Tweet {
    private _id: string
    private _type: string
    private _content: string

    constructor(type: string, content: string) {
        this._id = randomUUID()
        this._type = type
        this._content = content
    }

    public reply(content: any) {
       const provisoria = content
    }

    private like() {

    }

    private show() {

    }

    private showReplies() {

    }

}