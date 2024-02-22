/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [0,1,0,3,12]
// const nums = [0]
var moveZeroes = function() {
    for(let i=nums.length; i>=0; i--){
        if(nums[i] === 0){
            nums.push(0)
            nums.splice(i,1)
        }
    }
};

moveZeroes()