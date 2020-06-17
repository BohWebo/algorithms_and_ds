const isSuperSet = (set, subset) => {
    for (const elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }

    return true
};
