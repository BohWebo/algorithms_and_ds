
export class QueueBasedOnArray {
    constructor(array = []) {
        this.array = array;
    }

    enqueue(item) {
        this.array.push(item);

        return this;
    }

    dequeue() {
        return this.array.shift();
    }

    isEmpty() {
        return !this.array.length;
    }

    getBuffer() {
        return this.array.slice();
    }

    peek() {
        return this.array[0];
    }

}


