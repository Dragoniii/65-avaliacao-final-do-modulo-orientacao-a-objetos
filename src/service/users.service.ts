import { IUser } from "../contracts/user.interface";
import { User } from "../models/user.model";

export class UserService implements IUser {
    private users: User[] = [];

    create(newUser: User): void {
        this.users.push(newUser);
    }
}