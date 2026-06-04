


/**
 * @param {number} n
 * @return {Function} counter
 */

// 2620. Counter
var createCounter = function(n) {
    
    return function() {
        return n++
    };
};
