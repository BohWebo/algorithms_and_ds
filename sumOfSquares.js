

function sumOfSquaresFirstN(n) {
    let l = 0;
    let k = 1;
    let sum = 0;

    while (k < (2*n)) {
        l += k;
        sum += l;
        k += 2;
    }

    return sum;
}

console.log(sumOfSquaresFirstN(6));
