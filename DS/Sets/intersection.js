const intersectionSets = (setA, setB) => {
    const intersection = new Set();

    for (const elem of setA) {
        if (setB.has(elem)) {
            intersection.add(elem);
        }
    }

    return intersection;
};
