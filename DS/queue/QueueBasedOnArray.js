import {StackAndQueueBase} from '../StackAndQueueBase.js';

export class QueueBasedOnArray extends StackAndQueueBase {
    constructor(array) {
        super(array)
    }

    peek() {
        return this.array[0];
    }

    enqueue(item) {
        this.array.push(item);

        return this;
    }

    dequeue() {
        return this.array.shift();
    }

}


