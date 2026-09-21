


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







/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(value) {
            if (val === value) {
                return true 
            }
            throw new Error("Not Equal");
        },
        notToBe: function(value) {
            if (val !== value) {
                return true; 
            }
            throw new Error("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
