function qSort(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr.shift();
    const greater = [];
    const less = [];

    arr.forEach(item => item < pivot
        ? greater.push(item)
        : less.push(item));

    return [
        ...qSort(less),
        pivot,
        ...qSort(greater)
    ];
}

console.log(qSort([10, 5, 2, 4, 2, 54, 89],));
