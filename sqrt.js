function sqrtIntNaive(number) {
    if (number < 2) {
        return number;
    }

    let index = 1, square = 1;

    while (square < number) {
        if (square === number) return square;

        index++;
        square = index * index;
    }

    return index;
}

function sqrtInt(number) {
    if (number < 2) {
        return number;
    }

    let start = 1, end = number, res;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const midXmid = mid * mid;

        if (midXmid === number) {
            return mid;
        }

        if (midXmid < number) {
            start = mid + 1;
            res = mid;
        } else {
            end = mid - 1;
        }
    }

    return res;
}

console.time('sqrtIntNaive');
console.log(sqrtIntNaive(1024));
console.timeEnd('sqrtIntNaive');

console.time('sqrtInt');
console.log(sqrtInt(1024));
console.timeEnd('sqrtInt');
