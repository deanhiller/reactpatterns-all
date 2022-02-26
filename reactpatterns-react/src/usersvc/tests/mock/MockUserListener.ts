import UserListener from "../../api/UserListener";
import {IList, List} from "ts-generic-collections-linq";
import User from "../../api/User";


export default class MockUserListener implements UserListener {

    userCreatedRequestList: IList<User> = new List<User>();
    userRemovedRequestList: IList<User> = new List<User>();

    userCreated(user: User) : void {
        this.userCreatedRequestList.add(user);
    }

    userRemoved(user: User): void {
        this.userRemovedRequestList.add(user);
    }
}
