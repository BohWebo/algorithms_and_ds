import {StackBasedOnArray} from '../stack/stackBasedOnArray.js';
import {QueueBasedOnArray} from './QueueBasedOnArray.js';

export class TwoStackQueue {
    constructor() {
        this.inbox = new StackBasedOnArray();
        this.outbox = new StackBasedOnArray();
    }

    enqueue(value) {
        this.inbox.push(value);

        return this;
    }

    dequeue() {
        if (this.outbox.isEmpty()) {
            while(!this.inbox.isEmpty()) {
                this.outbox.push(this.inbox.pop())
            }
        }

        return this.outbox.pop();
    }

    peek() {
        return this.inbox.isEmpty()
            ? this.outbox.peek()
            : this.inbox.getBuffer()[0];
    }
}

const queue = new TwoStackQueue();
const queue2 = new QueueBasedOnArray();

Array(1000)
    .fill(null)
    .forEach((_, i) => {
        queue.enqueue(i);
        queue2.enqueue(i);
    });

console.time('queue');
queue.dequeue(); //0.549ms
console.timeEnd('queue');

console.time('queue2');
queue2.dequeue(); // 0.051ms
console.timeEnd('queue2');



