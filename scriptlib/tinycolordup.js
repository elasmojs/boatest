// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function() {

function tinycolor(color){
    console.log("Color is: " + color);
}
console.log('Init Tiny Color');
console.log(typeof Math);
// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    console.log('Is Node Module');
    module.exports = tinycolor;
}else {
    console.log('Is Browser!');
    window.tinycolor = tinycolor;
    console.log(typeof window.tinycolor);
}

})();
