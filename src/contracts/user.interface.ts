import { User } from "../models/user.model";

export interface IUser {
    create: (newUser: User) => void;
}
