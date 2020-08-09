try{
    // From a length
    var float32 = new Float32Array(2);
    float32[0] = 42;
    console.log(float32[0]); // 42
    console.log(float32.length); // 2
    console.log(float32.BYTES_PER_ELEMENT); // 4

    // From an array
    var arr = new Float32Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Float32Array([21, 31]);
    var y = new Float32Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(16);
    var z = new Float32Array(buffer, 0, 4);

    // From an iterable 
    /*
    //Parse error here
    var iterable = function*(){ yield* [1,2,3]; }(); 
    var float32 = new Float32Array(iterable); 
    // Float32Array[1, 2, 3]
    */
   
    true;
}catch(e){
    console.log(e);
    false;
}