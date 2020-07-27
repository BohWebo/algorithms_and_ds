

function merge(leftArr, rightArr) {
    const res = [];
    let leftIndex = 0,
        rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            res.push(leftArr[leftIndex++]);
        } else {
            res.push(rightArr[rightIndex++]);
        }
    }

    return res.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const mid = Math.round(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([6,1,23,4,2,3]));
