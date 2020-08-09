try{
    // From a length
    var float64 = new Float64Array(2);
    float64[0] = 42;
    console.log(float64[0]); // 42
    console.log(float64.length); // 2
    console.log(float64.BYTES_PER_ELEMENT); // 8

    // From an array
    var arr = new Float64Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Float64Array([21, 31]);
    var y = new Float64Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(32);
    var z = new Float64Array(buffer, 0, 4);

    // From an iterable 
    /*
    //Parse error here
    var iterable = function*(){ yield* [1,2,3]; }();
    var float64 = new Float64Array(iterable);
    // Float64Array[1, 2, 3]
    */
   
    true;
}catch(e){
    console.log(e);
    false;
}