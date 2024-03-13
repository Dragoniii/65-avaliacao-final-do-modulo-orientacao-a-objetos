import { User } from './models/user.model';
import { UserService } from './service/users.service';


const primeiroUser = {
    name: "Jo",
    email: "jo@email.com",
    userName: "Jojo",
    password: "GrowDev"
};

const newUser = new User(primeiroUser.name, primeiroUser.email, primeiroUser.userName, primeiroUser.password);
const userService = new UserService();
userService.create(newUser);

console.log("Usuário criado com sucesso:", newUser);
