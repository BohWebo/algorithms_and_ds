export const hash = Symbol('hash');

class HashTableLinear {
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


const exampleTable = new HashTableLinear(15);

exampleTable
    .put(6, '6th')
    .put(7, '6th')
    .put(8, '6th')
    .put(4, '6th')
    .put(9, '6th')
    .put(5, '6th')
    .put(0, '6th')
    .put(10, '6th')
    .put(11, '6th')
    .put(12, '6th')
    .put(13, '6th')
    .put(14, '6th');

console.dir({exampleTable});
console.log(exampleTable.get(1));

