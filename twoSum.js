var nums = [2,7,11,15];
var target = 9;
var twoSum = function(nums, target) {
    for(var i=0; i <= nums.length ; i++ ){
       var y = target - nums[i];
      for(var j=i+1;j<nums.length;j++){
          if(nums[j] - y == 0){
              return [i,j]
          }
      }
    }
};
twoSum(nums, target);


