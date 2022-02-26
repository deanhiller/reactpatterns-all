import UserService from "./UserService";
import UserServiceFactoryImpl from "../impl/UserServiceImpl";
import UserServiceImpl from "../impl/UserServiceImpl";

export default abstract class UserServiceFactory {
    static createFactory(map: Map<string, object> | null): UserService {
        const factory = new UserServiceImpl();
        factory.configure(map);
        return factory;
    }

    abstract createService(): UserService | null
}