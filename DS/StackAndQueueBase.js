export class StackAndQueueBase {
    constructor(array = []) {
        this.array = array;
    }

    isEmpty() {
        return !this.array.length;
    }

    getBuffer() {
        return this.array.slice();
    }
}
