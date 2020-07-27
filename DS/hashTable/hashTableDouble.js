import {hash} from './hashTableLinear.js';


class HashTableDouble {
    constructor(size) {
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
    }

    [hash](key) {
        if (!Number.isInteger(key))
            throw new Error('key must be a integer');

       const hashedKey = key % this.size;
       const r = this.size - 2;

       return r - hashedKey % r
    }

    put(key, value) {
        if (this.limit >= this.size)
            throw 'hash table is full';

        let hashedIndex = this[hash](key);

        while (this.keys[hashedIndex] != null) {
            hashedIndex++;

            hashedIndex = hashedIndex % this.size;
        }

        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;

        this.limit++;

        return this;
    }


    get(key) {
        let hashedIndex = this[hash](key);

        while (this.keys[hashedIndex] !== key) {
            hashedIndex++;

            hashedIndex = hashedIndex % this.size;
        }

        return this.values[hashedIndex];
    }

    initArray(length) {
        return new Array(length).fill(null);
    }

}


const exampleTable = new HashTableDouble(15);

exampleTable.put(2, 'first');
exampleTable.put(1, 'second');
exampleTable.put(3, 'third');
exampleTable
    .put(6, '6th')
    .put(7, '6th')
    .put(8, '6th')
    .put(4, '6th')
    .put(9, '6th')
    .put(5, '6th')
    .put(0, '6th');


console.dir({exampleTable});
console.log(exampleTable.get(1));

