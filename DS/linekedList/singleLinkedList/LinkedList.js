import {ListNode} from './ListNode.js';

export default class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    insert(value) {
        if (this.head == null) {
            this.head = new ListNode(value);
        } else {
            const prevHead = this.head;
            this.head = new ListNode(value, prevHead);
        }

        this.size++;

        return this;
    }

    remove(value) {
        if (this.isEmpty()) {
            console.log('Nothing to remove')
        }

        if (this.head.value === value) {
            this.head = this.head.next;

            this.size--;
        } else {
            let curr = this.head;
            let prev = curr;

            while (curr.next) {
                if (curr.value === value) {
                    prev.next = curr.next;
                    curr = curr.next;
                    break;
                }

                prev = curr;
                curr = curr.next;
            }

            if (curr.value === value) {
                prev.next = null;
            }

            this.size--;
        }
    }

    removeAtHead() {
        if (this.isEmpty()) {
            return console.log('Nothing to remove');
        }

        const deletedValue = this.head.value;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        this.size--;

        return deletedValue;
    }

    has(value) {
        let curr = this.head;

        while (curr) {
            if (curr.value === value) {
                return true;
            }

            curr = curr.next
        }

        return false;
    }
}

const list = new LinkedList();

list
    .insert(1)
    .insert(2)
    .insert(3)
    .insert(4)
    .insert(5);
