import UserService from "../api/UserService";
import UserServiceFactory from "../api/UserServiceFactory";

let userSvc: UserService;

const id1 = 4;
const id2 = 5;
const name1 = "dean";

beforeEach(() => {
    userSvc = UserServiceFactory.createFactory(null)
});

afterEach(() => {
});

test ('Test create user', () => {
    const name2 = "Yun";

    const employee = userSvc.createUser(id1, name1, "hiller");
    expect(employee?.getLastName()).toBe("hiller");
    expect(employee?.getId()).toBe((id1));
    expect(employee?.getFirstName()).toBe(name1);

    userSvc.createUser(id2, name2, "Xu");

    const employeeRes = userSvc.getUser(id1);
    expect(employeeRes?.getId()).toBe(id1);
    expect(employeeRes?.getFirstName()).toBe(name1);

    const employeeRes2 = userSvc.getUser(id2);
    expect(employeeRes2?.getId()).toBe(id2);
    expect(employeeRes2?.getFirstName()).toBe(name2);
});
test ('Test Remove User', () => {

    const employee = userSvc.removeUser(id1);
    expect(employee?.getId()).toBe(id1);
    expect(employee?.getFirstName()).toBe(name1);

    const user = userSvc.getUser(id1);
    expect(user?.getId()).toBe(null);
});
