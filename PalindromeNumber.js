/**
 * @param {number} x
 * @return {boolean}
 */
var x = 121;
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
isPalindrome(x);