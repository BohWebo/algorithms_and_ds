module.exports.LinkedListNode = class {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(cb) {
        return typeof cb === 'function'
            ? cb(this.value)
            : `${this.value}`
    }

};
