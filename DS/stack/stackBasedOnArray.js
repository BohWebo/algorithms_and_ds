export class StackBasedOnArray {
    constructor(array = []) {
        this.array = array;
    }

    isEmpty() {
        return !this.array.length;
    }

    getBuffer() {
        return this.array.slice();
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
