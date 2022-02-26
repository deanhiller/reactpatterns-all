import UserService from "../../../api/usersvc/UserService";

export default class TestAUserService {

    userSvc: UserService
    protected int id1 = 4;
    protected int id2 = 5;
    protected String name1 = "dean";
    protected MockUserListener mockUserListener;

    public TestAUserService(String name) {
    super(name);
}

@Override
protected void setUp() throws Exception {
    UserServiceFactory factory = UserServiceFactory.createFactory(null);
    userSvc = factory.createService();
}

@Override
protected void tearDown() throws Exception {

}

public void testAddUser() {
    String name2 = "Yun";

    User employee = userSvc.createUser(id1, name1, "hiller");
    assertEquals(id1, employee.getId());
    assertEquals(name1, employee.getFirstName());

    userSvc.createUser(id2, name2, "Xu");

    User employeeRes = userSvc.getUser(id1);
    assertEquals(id1, employeeRes.getId());
    assertEquals(name1, employeeRes.getFirstName());

    User employeeRes2 = userSvc.getUser(id2);
    assertEquals(id2, employeeRes2.getId());
    assertEquals(name2, employeeRes2.getFirstName());
}

public void testRemoveUser() {
    testAddUser();

    User employee = userSvc.removeUser(id1);
    assertEquals(id1, employee.getId());
    assertEquals(name1, employee.getFirstName());

    User user = userSvc.getUser(id1);
    assertNull(user);
}
}