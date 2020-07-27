import {hash} from './hashTableLinear.js';

class HashTableQuadratic {
    constructor(size) {
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
    }

    [hash](key) {
        if (!Number.isInteger(key))
            throw new Error('key must be a integer');

        return key % this.size;
    }

    put(key, value) {
        if (this.limit >= this.size)
            throw 'hash table is full';

        let hashedIndex = this[hash](key),
            squareIndex = 1;


        while (this.keys[hashedIndex] != null) {
            hashedIndex += squareIndex ** 2;
            hashedIndex = hashedIndex % this.size;

            squareIndex++;
        }

        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;

        this.limit++;

        return this;
    }


    get(key) {
        let hashedIndex = this[hash](key),
            squareIndex = 1;

        while (this.keys[hashedIndex] !== key) {
            hashedIndex += squareIndex ** 2;

            hashedIndex = hashedIndex % this.size;
        }

        return this.values[hashedIndex];
    }

    initArray(length) {
        return new Array(length).fill(null);
    }

}


const exampleTable = new HashTableQuadratic(15);

exampleTable.put(2, 'first');
exampleTable.put(1, 'second');
exampleTable.put(3, 'third');
exampleTable
    .put(6, '6th')
    .put(7, '6th')
    .put(8, '6th');

console.dir(exampleTable.keys);
console.dir(exampleTable.values);
console.log(exampleTable.get(1));

