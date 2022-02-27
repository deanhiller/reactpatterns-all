import UserService from "../api/UserService";
import MockUserListener from "./mock/MockUserListener";
import UserServiceFactory from "../api/UserServiceFactory";

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

test ('Test references to user', () => {
    const id1 = 4;
    const name1 = "dean";

    const employee = userSvc.createUser(id1, name1, "hiller");

    employee?.setId(5);
    employee?.setFirstName("xxx");

    expect(employee?.getId()).toBe(5);
    expect(employee?.getFirstName()).toBe("xxx");

    const employee2 = userSvc.getUser(id1);
    expect(employee2?.getId()).toBe(id1);
    expect(employee2?.getFirstName()).toBe(name1);

});
