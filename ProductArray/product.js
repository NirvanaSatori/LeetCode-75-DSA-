// const nums = [1,2,3,4]
const nums = [-1,1,0,-3,3]
const productExceptSelf = function(nums) {
    const zeros = nums.filter(num=>num===0)
    if(zeros.length>1){
        return nums.map(num=>num=0)
    } 
    const multiple = nums.reduce((acc, curr)=>{
        if(curr === 0){
            return acc
        }else{
           return acc*curr
        }
    },1)
    const multiple2 = nums.reduce((acc, curr)=>{
           return acc*curr
    },1)

    const numsProd = nums.map(num=>{
        if(num === 0 ){
           return num = multiple
        }
        if(multiple2 === 0){
            return 0
        }
        else{
            return num = multiple/num
        }
    })
    return numsProd
};

productExceptSelf(nums)