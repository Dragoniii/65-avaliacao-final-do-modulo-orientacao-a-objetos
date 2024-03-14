import { User } from './models/user.model';
import { UserService } from './service/users.service';


const userService = new UserService();
userService.create(new User("Jo", "jo@email.com", "Jojo", "GrowDev"));
console.log(userService.getUsers);
userService.create(new User("Jo", "jo@email.com", "Jojo", "GrowDev"));
console.log(userService.getUsers);
userService.create(new User("Jo", "jo@email.com", "Jojo", "GrowDev"));
console.log(userService.getUsers);
