/**
 * @param {number} x
 * @return {number}
 */

var x = -120;
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
reverse(x);