import TransitionListener from "../../api/TransitionListener";
import {IList, Dictionary, List} from 'ts-generic-collections-linq'

export default class MockTransitionListener implements TransitionListener {

    requestList: IList<string>;

    constructor() {
        this.requestList = new List<string>()
    }

    onTransition(event: string): void {
        this.requestList.add(event);
    }
}
