import State from "../api/State";
import StateMachineBuilder from "../api/StateMachineBuilder";
import UnsupportedException from "../api/UnsupportedException";
import Transition from "../api/Transition";
import StateMachine from "../api/StateMachine";

export class StateMachineBuilderImpl extends StateMachineBuilder {

    createState(name: string): State {
        throw new UnsupportedException("you need to implement");
    }

    createTransition(state1: State, state2: State, event: string): Transition {
        throw new UnsupportedException("you need to implement");
    }

    setInitialState(initialState: State): void {
        throw new UnsupportedException("you need to implement");
    }

    build(): StateMachine {
        throw new UnsupportedException("you need to implement");
    }
}
