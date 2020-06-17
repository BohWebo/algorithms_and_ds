const {memorize} = require('../utils');

/*
* Given an integer as input, can you round it to the next (meaning, "higher") 5?

* Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
* */


const roundToNext5Recur = (n) => (n % 5) === 0
    ? n
    : roundToNext5Recur(n + 1);

const memorizedRoundToNext5Recur = memorize(roundToNext5Recur);

const roundToNext5Iter = (n) => {
    while (n % 5) n++;

    return n
};
console.time('roundToNext5Recur');
console.log(roundToNext5Recur(2));
console.timeEnd('roundToNext5Recur'); // 5.137ms

console.time('memorizedRoundToNext5Recur');
console.log(memorizedRoundToNext5Recur(2));
console.timeEnd('memorizedRoundToNext5Recur'); // 0.209ms

console.time('roundToNext5Iter');
console.log(roundToNext5Iter(2));
console.timeEnd('roundToNext5Iter'); // 0.104ms

