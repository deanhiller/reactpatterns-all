import StateMachine from "./StateMachine";
import State from "./State";
import Transition from "./Transition";

export default interface StateMachineBuilder
{
    createState(name: string): State;

    createTransition(startState: State, endState: State, event: string): Transition;

    setInitialState(initialState: State): void;

    build() : StateMachine;
}
