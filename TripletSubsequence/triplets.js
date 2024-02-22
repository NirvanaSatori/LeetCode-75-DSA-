/**
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [1,2,3,4,5]
// const nums = [2,1,5,0,4,6]
// const nums = [5,4,3,2,1]
var increasingTriplet = function() {
    let firstNum = Infinity;
    let secoundNum = Infinity;
    
    for(let currentNum of nums){
    
        if(currentNum > secoundNum){
            return true;
        }
    
        if(currentNum > firstNum){
            secoundNum = currentNum;
        }else{
            firstNum = currentNum
        }
    }
    
    return false;
};

increasingTriplet()