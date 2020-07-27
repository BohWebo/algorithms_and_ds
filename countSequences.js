function countSequences(sequences) {
    const counts = [];
    let count = 1;

    for (let i = 1; i <= sequences.length; i++) {
        if (sequences[i - 1] === sequences[i]) {
            count++;
        } else {
            counts.push(count);
            count = 1;
        }
    }

    const sortedCounts = counts.sort();

    return sortedCounts[counts.length - 1];
}

console.log(countSequences([1,3,4,22,22,1,1,1,1,1,1,1,4,55,55,555,3,5,3,3,3,3,3]));
