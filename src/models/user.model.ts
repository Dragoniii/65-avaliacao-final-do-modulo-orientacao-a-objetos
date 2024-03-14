import { randomUUID } from 'crypto';
import { Tweet } from "./tweet.model";

export class User {
    private _id: string
    private _name: string
    private _email: string
    private _userName: string
    private _password: string

    private following: string[] = [];

    constructor(name: string, email: string, userName: string, password: string) {
        this._id = randomUUID()
        this._name = name
        this._email = email
        this._userName = userName
        this._password = password
    }

    public sendTweet(tweet: Tweet) {

    }

    public follow(user: User) {
        this.following.push(user._id);
    }

    public showFeed() {

    }

    public showTweets() {

    }

}