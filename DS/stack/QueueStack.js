import {TwoStackQueue as Queue} from '../queue/TwoStackQueue.js';

export class QueueStack {
    constructor() {
        this.inbox = new Queue();

    }

    push(value) {
        this.inbox.enqueue(value);
    }

    pop() {
        const bufferQueue = new Queue();
        const size = this.inbox.array.length - 1;
        let counter = 0;

        while (++counter <= size) {
            bufferQueue.enqueue(this.inbox.dequeue());
        }

        const popped = this.inbox.dequeue();
        this.inbox = bufferQueue;

        return popped;
    }
}

const stack = new QueueStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
