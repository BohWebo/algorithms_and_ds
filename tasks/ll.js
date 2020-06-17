const {LinkedList} = require('../DS/LinkedList/LinkedList');

const linkedList = new LinkedList();

linkedList
    .append(1)
    .append(2)
    .append(3)
    .append(4);

linkedList.deleteTail();

console.dir(linkedList);
