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

/**
[1,2,3,4]

1. 첫번째 result에 빈배열 추가
2. cur = 0으로 지정
3. for문을 돌면서 nums[0] 즉, 1의 값을 add에 할당한다.
4. cur += add 는 cur = 0 + 1 이니깐 cur = 1 값이 된다.
5. result에 cur값을 push하면 [1]값이 들어온다.
6. 또 for문을 돌면 nums[1] 즉, 2의 값을 add에 할당한다.
7. cur += add 즉, cur = 1 + 2 이 되서 cur는 3의 값을 할당한다.
8. result에 cur값을 push하면 [1,3]값이 들어온다.
9. 이런식으로 포문돌고 할당해주면 [1,3,6,10]이 된다 
*/