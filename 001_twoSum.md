#### 001__陣列題型__easy
# Two Sum <br/>兩數總和

### Description
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
<br/>
You may assume that each input would have exactly one solution, and you may not use the same element twice.

有一個整數的陣列，將兩數相加為一個特定數字(target)。
<br/>
你可以假設輸入任一種數字僅有一個正確的解法，兩數相加的數字不可使用同一個。
<br/>

##### Example 1:
```js
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
```
##### start:
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};
```
* * *
### Thinking
1. 類似二元一次方程式 x + y = 9
2. 9 - x = y ， 確認陣列中是否有符合 y 的數字

* * *
### Submissions
```js
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

```
###### Runtime: 60 ms
* * *
### Solution
###### 別人怎麼寫的? Runtime: 40 ms 的人的寫法
>Thinking:
    <br/><br/>
    填入你所找尋的答案思考方式
    <br/><br/>
```js

var twoSum = function(nums, target) {
    const result = []
    const map = {}
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }
    for ( let a = 0; a < nums.length; a++) {
        let looking = target - nums[a]
        if (map[looking] != undefined && map[looking] != a) {
            result.push(a, map[looking])
            break
        }
    }
    return result
};

```

```js

var twoSum = function(nums, target) {
    var obj = {};
    for(var i=0;i<nums.length; i++) {
        if(typeof obj[nums[i]] == 'number')
        {
            return [obj[nums[i]], i]
        }
        obj[target - nums[i]] = i;
    }
     return null
};

```
* * *
### Note
(有則填 無則跳過)
 自己的筆記

```js
(有則填 無則跳過)
對於自己筆記的js註解

```