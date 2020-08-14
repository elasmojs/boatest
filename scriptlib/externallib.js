//require('./scriptlib/moment.min.js');
//require('./scriptlib/math.js');
require('./scriptlib/tinycolordup.js');
require('./scriptlib/mylib.js');

console.log(window.msg);
console.log(window.tinycolor);
function callexternal(){
    console.log('in external call');
    console.log("Hex of red color: " + window.tinycolor("red"));
}