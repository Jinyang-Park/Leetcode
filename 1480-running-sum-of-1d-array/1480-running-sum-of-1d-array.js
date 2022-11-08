/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    let cur = 0;
    
    for(let i = 0; i < nums.length; i++) {
        let add = nums[i];
        
        cur += add;
        result.push(cur);
    }
return result
};