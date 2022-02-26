import TransitionListener from "./TransitionListener";

export default interface Transition {

    addTransitionListener(listener: TransitionListener): void;

}
