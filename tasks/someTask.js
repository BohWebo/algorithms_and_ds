function findOutlier(integers){
    const [evens, odds] = integers.reduce((arrays, int) => {
        const index = +!!(int % 2);
        arrays[index].push(int);

        return arrays;
    }, [[],[]]);

    return evens.length === 1 ? evens[0] : odds[0]
}

findOutlier([0, 1, 2]);
