#### 001__陣列題型__easy
# Palindrome Number <br/>迴文數字

### Description
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
<br/>

確認數字是否迴文數字，無論由左往右或是由右往左，讀起來都一樣，稱為迴文數字。

<br/>

##### Example 1:
```js
    Input: 121
    Output: true
```
##### Example 2:
```js
    Input: -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```
##### Example 3:
```js
    Input: 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```
##### start:
```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
};
```
* * *
### Thinking
1. 切成字串後，比對第一個跟最後一個字串是否一致
2. 不一致則false，一致則繼續進行直到結束
3. 比對次數為for迴圈的循環次數，整串數字兩個兩個比對，所以除以2為比對次數

* * *
### Submissions
```js
 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var solution = x.toString().split('');
    var last = (solution.length) -1 ;
    var checkTime = Math.floor((solution.length) / 2);
for( var i = 0; i<= checkTime ; i++){
        if(solution[i] !== solution[last - i]){
            return false;
        }
    }
   return true;
};

```
###### Runtime: 188 ms
* * *
### Solution
###### 別人怎麼寫的? Runtime: 148 ms 的人的寫法
>Thinking:
    <br/><br/>
     1. if(x<0 || isNaN(x)) return false; => 負數或是不為數字直接為false，不進行判斷。
     2. 後面完全不懂 = =
    <br/><br/>
```js

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0 || isNaN(x)) return false;
    
    let reverse = 0;
    const compare = x;
    
    while(x){
        let rem = x%10;
        reverse = reverse*10 + rem;
        x= Math.floor(x/10);
    }
    
    return compare == reverse ;
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