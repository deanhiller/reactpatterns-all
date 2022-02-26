import StateMachine from "./StateMachine";
import {StateMachineBuilderImpl} from "../impl/StateMachineBuilderImpl";
import State from "./State";
import Transition from "./Transition";

export default abstract class StateMachineBuilder
{
    static createFactory():StateMachineBuilder {
        return new StateMachineBuilderImpl();
    }

    abstract createState(name: string): State;

    abstract createTransition(startState: State, endState: State, event: string): Transition;

    abstract setInitialState(initialState: State): void;

    abstract build() : StateMachine;
}
