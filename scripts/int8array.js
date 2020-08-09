try{
    // From a length
    var int8 = new Int8Array(2);
    int8[0] = 42;
    console.log(int8[0]); // 42
    console.log(int8.length); // 2
    console.log(int8.BYTES_PER_ELEMENT); // 1

    // From an array
    var arr = new Int8Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Int8Array([21, 31]);
    var y = new Int8Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(8);
    var z = new Int8Array(buffer, 1, 4);

    // From an iterable
    /*
    // Parse error here
    var iterable = function*(){ yield* [1,2,3]; }();
    var int8 = new Int8Array(iterable);
    // Int8Array[1, 2, 3]
    */
   
    true;
}catch(e){
    console.log(e);
    false;
}