/*
* Write a function that takes a single string (word) as argument.
*  The function must return an ordered list containing the indexes of all capital letters in the string.

* Example:
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
* */

const reducer = (arr, letter, i) => /[A-Z]/.test(letter)
    ? arr.concat(i)
    : arr;

const capitalize = (str) => Array
    .from(str)
    .reduce(reducer, []);

console.log(capitalize('CodEWaRs'));

