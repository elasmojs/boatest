try{
    // From a length
    var int16 = new Int16Array(2);
    int16[0] = 42;
    console.log(int16[0]); // 42
    console.log(int16.length); // 2
    console.log(int16.BYTES_PER_ELEMENT); // 2

    // From an array
    var arr = new Int16Array([21,31]);
    console.log(arr[1]); // 31

    // From another TypedArray
    var x = new Int16Array([21, 31]);
    var y = new Int16Array(x);
    console.log(y[0]); // 21

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(8);
    var z = new Int16Array(buffer, 0, 4);

    // From an iterable
    /*
    //Parse error here
    var iterable = function*(){ yield* [1,2,3]; }();
    var int16 = new Int16Array(iterable);
    // Int16Array[1, 2, 3]
    */
   
    true;
}catch(e){
    console.log(e);
    false;
}