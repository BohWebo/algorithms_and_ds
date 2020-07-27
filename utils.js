
export const memorize = (fn, cache = {}) =>
    (n) => cache.hasOwnProperty(n)
        ? cache[n]
        : cache[n] = fn(n);


export const toDigits = n => n === 0
    ? []
    : [...toDigits(Math.floor(n / 10)), n % 10];
