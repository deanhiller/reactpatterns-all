import StateMachineBuilder from "./StateMachineBuilder";
import StateMachineBuilderImpl from "../impl/StateMachineBuilderImpl";

export default class StateMachineBuilderFactory
{
    static createBuilder():StateMachineBuilder {
        return new StateMachineBuilderImpl();
    }
}
