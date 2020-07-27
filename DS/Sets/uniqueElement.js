
const uniqueElement = (...sets) =>
    new Set(sets.reduce((arr, set) => arr.concat(...set), []));
