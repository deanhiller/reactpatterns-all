import User from "./User";

export default interface UserListener {

    userCreated(): User
    userRemoved(): User
}