import UserService from "./UserService";
import UserServiceFactoryImpl from "../impl/usersvc/UserServiceImpl";
import UserServiceImpl from "../impl/usersvc/UserServiceImpl";

export default abstract class UserServiceFactory {
    static createFactory(map: Map<String, Object>): UserService {
        const factory = new UserServiceImpl();
        factory.configure(map);
        return factory;
    }

    abstract configure(map: Map<String, Object>): void

    abstract createService(): UserService | null
}