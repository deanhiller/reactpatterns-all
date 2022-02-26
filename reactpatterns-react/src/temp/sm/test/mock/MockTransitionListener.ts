import TransitionListener from "../../api/TransitionListener";
import {IList, Dictionary, List} from 'ts-generic-collections-linq'

export default class MockTransitionListener implements TransitionListener {

    requestList: IList<string> = new List();

    onTransition(event: string): void {
        this.requestList.add(event);
    }
}
