import StateMachineBuilder from "../api/StateMachineBuilder";
import MockTransitionListener from "./mock/MockTransitionListener";
import StateMachineBuilderFactory from "../api/StateMachineBuilderFactory";

var builder: StateMachineBuilder;

beforeEach(() => {
    builder = StateMachineBuilderFactory.createBuilder();
});

afterEach(() => {
});

test('Test on off statemachine', () => {
    const onEvent = "flipOn";
    const offEvent = "flipOff";

    const on = builder.createState("on");
    const off = builder.createState("off");

    const transition1 = builder.createTransition(on, off, offEvent);
    const transition2 = builder.createTransition(off, on, onEvent);
    const mock = new MockTransitionListener();
    transition1.addTransitionListener(mock);

    builder.setInitialState(on);

    const stateMachine = builder.build();

    //assert initial state is the one we set
    expect(stateMachine.getCurrentState()).toBe(on);

    stateMachine.fireEvent(onEvent); //should do nothing.  we are already on

    expect(stateMachine.getCurrentState()).toBe(on);

    stateMachine.fireEvent(offEvent);

    expect(stateMachine.getCurrentState()).toBe(off);

    const temp = mock.requestList;
    expect(mock.requestList.length).toBe(1);
    expect(mock.requestList.take(0)).toBe(offEvent);
});

