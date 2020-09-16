import ListNode from './ListNode.js';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtHead(value) {
        const node = new ListNode(value);

        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;

            this.head = node;
        }

        this.size++;
        return this;
    }

    insertAtTail(value) {
        const node = new ListNode(value);

        if (this.tail == null) {
            this.head = this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;

            this.tail = node;
        }

        this.size++;
        return this;
    }

    deleteAtHead() {
        if (this.head == null)
            return null;

        const value = this.head.value;

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;
        return value;
    }

    deleteAtTail() {
        if (this.tail == null)
            return null;

        const value = this.tail.value;

        if (this.tail === this.head) {
            this.tail = this.next = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;
        return value;
    }

    findStartFromHead(value) {
        let curr = this.head;

        while (curr) {
            if (curr.value === value) {
                return true;
            }

            curr = curr.next;
        }

        return false
    }

    findStartFromTail(value) {
        let curr = this.tail;

        while (curr.prev) {
            if (curr.value === value) {
                return true;
            }

            curr = curr.prev;
        }

        return false;
    }

}

const list = new LinkedList();

list.insertAtHead(10).insertAtHead(9).insertAtTail(5).insertAtTail(4);

console.dir({list}, {depth: 6});
console.log(list.findStartFromHead(4));
console.log(list.findStartFromTail(10));
console.log(list.findStartFromTail(8));

list.deleteAtHead();
list.deleteAtTail();

console.dir({list}, {depth: 6});

