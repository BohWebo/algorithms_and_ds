function binarySearch(array, item) {
    let low = 0;
    let high = array.length - 1;
    let operationCount = 0;

    while (high >= low) {
        operationCount++;
        const mid = Math.round((high + low) / 2);
        const guess = array[mid];

        if (guess === item) return mid;

        if (guess > item) high = mid - 1;
        else low = mid + 1;
    }

    return null;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 2));
