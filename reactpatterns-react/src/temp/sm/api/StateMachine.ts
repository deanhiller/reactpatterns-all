import State from "./State";

interface StateMachine
{
    getCurrentState(): State | null;

    fireEvent(onEvent: string): void;

}

export default StateMachine;
