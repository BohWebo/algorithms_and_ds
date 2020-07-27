import {toDigits} from '../utils';

function nextBigger(n) {
    const digits = toDigits(n);

    // find the pivot, the point (from right) where i > i-1
    let p = -1;

    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] > digits[i - 1]) {
            p = i - 1;
            break;
        }
    }

    // if we are unable to find the pivot, skip
    if (p === -1) return p;

    // splice the digits in the pivot
    const right = digits.splice(p);

    // extract pivot
    const pv = right.shift();

    // find the lowest number > pv
    let mm = null,
        mmi = null;

    for (let i = 0; i < right.length; i++) {
        if (right[i] > pv) {
            if (mm == null || right[i] < mm) {
                mm = right[i];
                mmi = i;
            }
        }
    }

    if (mmi == null) return -1;

    right.splice(mmi, 1);
    right.push(pv);
    right.sort((a, b) => b - a);

    // concat the left + new pivot + right part
    const res = +digits.concat(mm, right).join('');
    if (res < n) return -1;

    return res;
}
