import StateMachineBuilder from "../api/StateMachineBuilder";
import StateMachineBuilderFactory from "../api/StateMachineBuilderFactory";

var builder: StateMachineBuilder;

beforeEach(() => {
    builder = StateMachineBuilderFactory.createBuilder();
});

afterEach(() => {
});

test('Test phone statemachine', () => {
    const incomingCall = "incomingCall";
    const answerCall = "answerCall";
    const hangup = "hangup";

    const idle = builder.createState("IDLE");
    const ringing = builder.createState("RINGING");
    const onACall = builder.createState("ON-A-CALL");

    builder.createTransition(idle, ringing, incomingCall);
    builder.createTransition(ringing, onACall, answerCall);
    builder.createTransition(onACall, idle, hangup);

    builder.setInitialState(idle);
    const stateMachine = builder.build();

    //should start in idle
    expect(stateMachine.getCurrentState()).toBe(idle);

    stateMachine.fireEvent(incomingCall);
    expect(stateMachine.getCurrentState()).toBe(ringing)

    stateMachine.fireEvent(answerCall);
    expect(stateMachine.getCurrentState()).toBe(onACall);

    stateMachine.fireEvent(hangup);
    expect(stateMachine.getCurrentState()).toBe(idle);
});
