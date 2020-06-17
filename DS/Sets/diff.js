const difference = (setA, setB) => {
    const diff = new Set(setA);

    for (const elem of setB) {
        if (diff.has(elem)) {
            diff.delete(elem)
        }
    }

    return diff;
};
