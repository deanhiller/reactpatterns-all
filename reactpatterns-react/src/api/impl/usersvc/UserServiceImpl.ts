import UserServiceFactory from "../../usersvc/UserServiceFactory";
import UserService from "../../usersvc/UserService";
import UserListener from "../../usersvc/UserListener";
import User from "../../usersvc/User";

export default class UserServiceImpl implements UserService {
    configure(map: Map<String, Object>) {}
    createService(): UserService | null  {return null;}

    addUserListener(listener: UserListener): void {
    }

    createUser(id: number, firstname: string, lastname: string): User | null {
        return null
    }

    getUser(id: number): User | null {
        return null;
    }

    removeUser(id: number): User | null{
        return null;
    }

}
