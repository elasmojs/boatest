var x = 10;
try{
    function createFunction1() {
        var x = 20;
        // this |x| refers global |x|
        return new Function('return x'); 
    }

    function createFunction2() {
        var x = 20;
        function f() {
            // this |x| refers local |x| above
            return x; 
        }
        return f;
    }

    var f1 = createFunction1();
    console.log('Should be (10): ' + f1());          // 10 , reference to global X is not working
    var f2 = createFunction2();
    console.log('Should be (20): ' + f2());          // 20

    true;
}catch(e){
    console.log(e);
    false;
}