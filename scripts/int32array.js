try{
    // From a length
    var int32 = new Int32Array(2);
    int32[0] = 42;
    console.log(int32[0]); // 42
    console.log(int32.length); // 2
    console.log(int32.BYTES_PER_ELEMENT); // 4

    // From an array
    var arr = new Int32Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Int32Array([21, 31]);
    var y = new Int32Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(16);
    var z = new Int32Array(buffer, 0, 4);

    // From an iterable 
    /*
    // Parse error here
    var iterable = function*(){ yield* [1,2,3]; }(); 
    var int32 = new Int32Array(iterable);
    // Int32Array[1, 2, 3] 
    */
   
    true;
}catch(e){
    console.log(e);
    false;
}