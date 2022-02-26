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

function testAddUser(): void {
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
}

test ('Test remove user', () => {
    testAddUser();

    const employee = userSvc.removeUser(id1);
    expect(employee?.getId()).toBe(id1);
    expect(employee?.getFirstName()).toBe(name1);

    expect(mockUserListener.userRemovedRequestList.length).toBe(1);
    const removedEmployee = mockUserListener.userRemovedRequestList.elementAt(0);
    expect(employee?.getId()).toBe(id1);
    expect(removedEmployee.getFirstName()).toBe(name1);

});
