import {StackAndQueueBase} from '../StackAndQueueBase.js';

export class StackBasedOnArray extends StackAndQueueBase {
    constructor(array) {
        super(array);
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    pop() {
        return this.array.pop();
    }

    push(item) {
        this.array.push(item);
    }
}
