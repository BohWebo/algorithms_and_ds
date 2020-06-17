const {LinkedListNode} = require('./LinkedListNode');

module.exports.LinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepend(value) {
        const node = new LinkedListNode(value, this.head);

        this.head = node;

        if (this.tail == null) {
            this.tail = node;
        }

        return this;
    };

    append(value) {
        const node = new LinkedListNode(value, this.head);

        if (this.head == null) {
            this.head = node;
            this.tail = node;

            return this;
        }

        this.tail.next = node;
        this.tail = node;

        return this;
    };

    delete(value) {
        if (this.head == null) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.head.value === value) {
            deletedNode = this.head;

            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    find(value, cb) {
        if (this.tail == null) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (cb && cb(currentNode.value)) {
                return currentNode;
            }

            if (value != null && value === currentNode.value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // There is only one node in linked list.
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        // If there are many nodes in linked list...

        // Rewind to the last node and delete "next" link for the node before the last one.
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    deleteHead() {
        if (this.head == null) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    fromArray(values = []) {
        values.forEach(value => this.append(value));

        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString(cb) {
        return this.toArray()
            .map(node => node.toString(cb))
            .toString();
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;

            currNode.next = prevNode;

            prevNode = currNode;
            currNode = nextNode;
        }

        return this;
    }






};
