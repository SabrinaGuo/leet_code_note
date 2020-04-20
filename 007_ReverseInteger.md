#### 001__陣列題型__easy
# Reverse Integer <br/>整數反轉

### Description
Given a 32-bit signed integer, reverse digits of an integer.
note:Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
<br/>
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
<br/>

給一個帶有符號(例如負數)的整數，將其數字反轉。
<br/>
注意:只能存儲32位有符號整數範圍內的整數的環境：[−231，231 − 1]。 出於這個問題的目的，假定您的函數在反向整數溢出時返回0。
<br/>

##### Example 1:
```js

Input: 123
Output: 321

```
##### Example 2:
```js

Input: -123
Output: -321

```
##### Example 3:
```js

Input: 120
Output: 21

```
##### start:
```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   
};

```
* * *
### Thinking
1.題目要求溢出值則等於0，若無溢出則需判斷是否有符號，符號位置不變，其他整數進行反轉。 

2.找出會溢出的最大與最小值:32位整數，最小值-2(31)，最大值 2(31)-1，
`(31)=>為指數`，可以運用 `Math.pow(base, exponent)` 函式回傳 base 的 exponent 次方（幂）值。

3.轉成字串使用`split('').reverse().join('')`，切割後進行反轉，確認是否有符號，如果有則提取符號後面的字串部分進行反轉，若無則直接進行反轉。

4.確認是否有溢出值，需要進行`數字比較`，在有符號部分(表示負數)所以 0 - 字串(強制轉型)，無符號的部分則字串 - 0 (強制轉型)，進行數字比較(使用三元運算)。

* * *
### Submissions
```js
 
   var reverse = function(x) {
    var max = Math.pow(2, 31) - 1;
    var min = -Math.pow(2, 31);
    var str = x.toString();
    var revStr = 0;
    if(str.indexOf('-') != -1){
        str = str.slice(1);
        revStr = 0 - str.split('').reverse().join('');

    }else{
        revStr = str.split('').reverse().join('') - 0;
    }
   return (revStr > max || revStr < min) ? 0 : revStr;
};

```
###### Runtime: 68 ms Memory Usage: 35.9 MB
* * *
### Solution
###### 別人怎麼寫的? Runtime: 40 ms 的人的寫法
>Thinking:
    <br/><br/>
    填入你所找尋的答案思考方式
    <br/><br/>
```js

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let leftNum = Math.abs(x);
  let res = '';
  while (leftNum > 0) {
    let digit = leftNum % 10;
    res += digit + '';
    leftNum = Math.floor(leftNum / 10);
  }
  const num = Number(res);

  if (num < -1 * Math.pow(2, 31) || num > Math.pow(2, 31) - 1) {
    return 0;
  }

  return x > 0 ? num : (-1 * num);
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