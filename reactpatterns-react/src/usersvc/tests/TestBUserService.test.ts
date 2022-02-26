import UserService from "../api/UserService";
import UserServiceFactory from "../api/UserServiceFactory";
import MockUserListener from "./mock/MockUserListener";

let userSvc: UserService;

const id1 = 4;
const id2 = 5;
const name1 = "dean";
let mockUserListener: MockUserListener;

beforeEach(() => {
    mockUserListener = new MockUserListener();

    userSvc = UserServiceFactory.createFactory(null)

    userSvc.addUserListener(mockUserListener);
});

afterEach(() => {
});

test ('Test create user', () => {
    const name2 = "Yun";

    userSvc.createUser(id1, name1, "hiller");

    expect(mockUserListener.userCreatedRequestList.length).toBe(1);

    userSvc.createUser(id2, name2, "Xu");

    expect(mockUserListener.userCreatedRequestList.length).toBe(2);

    const employeeRes = userSvc.getUser(id1);
    expect(employeeRes?.getId()).toBe(id1);
    expect(employeeRes?.getFirstName()).toBe(name1);

    const employeeRes2 = userSvc.getUser(id2);
    expect(employeeRes2?.getId()).toBe(id2);
    expect(employeeRes2?.getFirstName()).toBe(name2);

});
