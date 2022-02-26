import UserServiceFactory from "../api/UserServiceFactory";
import UserService from "../api/UserService";
import UserListener from "../api/UserListener";
import User from "../api/User";
import UnsupportedException from "../api/UnsupportedException";

export default class UserServiceImpl implements UserService {
    configure(map: Map<string, object> | null) {}
    createService(): UserService | null  {return null;}

    addUserListener(listener: UserListener): void {
    }

    createUser(id: number, firstname: string, lastname: string): User | null {
        throw new UnsupportedException("Still needs to be implemented.")
    }

    getUser(id: number): User | null {
        throw new UnsupportedException("Still needs to be implemented.")
    }

    removeUser(id: number): User | null{
        throw new UnsupportedException("Still needs to be implemented.")
    }

}
