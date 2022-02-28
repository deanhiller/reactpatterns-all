import User from "./User";
import UserListener from "./UserListener";

export default interface UserService {

    createUser(id: number, firstname: string, lastname: string): User | null
    removeUser(id: number): User | null
    getUser(id: number): User | null

    addUserListener(listener: UserListener ): void
}
