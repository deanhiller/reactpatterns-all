import User from "./User";

export default interface UserListener {

    userCreated(user: User): void
    userRemoved(user: User): void
}
