// const candies = [2,3,5,1,3]
// const extraCandies = 3
// const candies = [4,2,1,1,2]
// const extraCandies = 1
const candies = [12,1,12]
const extraCandies = 10
var kidsWithCandies = function() {
    const largestNum = Math.max(...candies)
    const bool = candies.map(candy=>{
        if((candy+extraCandies) >= largestNum){
            return true
        }else{
            return false
        }
    })

    return bool
};
kidsWithCandies()