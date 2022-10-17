/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr =  x.toString().split("").reverse().join("");
    return x.toString() === arr ? true: false;
};