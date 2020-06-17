const getField = (obj, field) =>
    field.includes('.')
        ? field
            .split('.')
            .reduce((obj, current) => obj && obj[current], obj)
        : obj[field];


const createFieldGetter = (field) =>
    typeof field === 'function'
        ? (obj) => field(obj, getField)
        : (obj) => getField(obj, field);


const defaultComparator = (a, b) =>
    a == null
        ? +(b != null)
        : b == null
        ? -1
        : typeof a === 'string'
            ? a.localeCompare(b)
            : a - b;

const createComparator = ({field, direction = 'ASC'}) => {
    const fieldGetter = createFieldGetter(field);
    const multiplier = direction === 'ASC' ? 1 : -1;
    return (a, b) => defaultComparator(fieldGetter(a), fieldGetter(b)) * multiplier;
};
const sort = (data, sorting) => {
    if (sorting == null || sorting.length === 0) {
        return data;
    }
    const comparator = sorting.reduce((result, entry) => {
        const comparator = createComparator(entry);
        return result == null
            ? comparator
            : (a, b) => result(a, b) || comparator(a, b);
    }, null);
    return data.sort(comparator);
};

sort([{a: 1, b: 1}, {a: -5, b: 1}, {a: 1, b: 2}, {a: 1, b: -1}], [{field: 'a'}])

sort([{a: 1, b: 1}, {a: -5, b: 1}, {a: 1, b: 2}, {a: 1, b: -1}], [{field: 'a'}, {field: 'b'}])

sort([{a: 1, b: 1}, {a: -5, b: 1}, {a: 1, b: 2}, {a: 1, b: -1}], [{field: 'a'}, {field: 'b', direction: 'DESC'}])

sort([{a: 1, b: 1}, {a: -5, b: 1}, {a: 1, b: 2}, {a: 1, b: -1}], [{field: 'b', direction: 'DESC'}])

sort([{a: 1, b: 1}, {a: -5, b: 1}, {a: 1, b: 2}, {a: 1, b: -1}], [{field: 'b', direction: 'DESC'}, {field: 'a'}])
