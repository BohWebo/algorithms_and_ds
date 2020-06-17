
module.exports.memorize = (fn, cache = {}) =>
    (n) => cache.hasOwnProperty(n)
        ? cache[n]
        : cache[n] = fn(n);
