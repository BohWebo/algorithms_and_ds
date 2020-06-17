const {memorize} = require('./utils');

function fibIterArr(n) {
    const arr = Array(n);
    arr[0] = 0;
    arr[1] = 1;

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
}

function fibIter(n) {
    let first = 1;
    let second = 1;
    let next = first + second;
    let i = 2;

    while (++i < n) {
        first = second;
        second = next;
        next = first + second;
    }

    return next;
}

const fibRecursive = (n) => n <= 1
    ? n
    : fibRecursive(n - 1) + fibRecursive(n - 2);

const cachedFibRecursive = memorize(fibRecursive);

console.time('fibIterArr');
console.log('fibIterArr--->', fibIterArr(20));
console.timeEnd('fibIterArr');

console.time('fibIter');
console.log('fibIter--->', fibIter(20));
console.timeEnd('fibIter');


console.time('fibRecursive');
console.log('fibRecursive-->', fibRecursive(20));
console.timeEnd('fibRecursive');


console.time('cachedFibRecursive');
console.log('cachedFibRecursive-->', cachedFibRecursive(20));
console.timeEnd('cachedFibRecursive');

