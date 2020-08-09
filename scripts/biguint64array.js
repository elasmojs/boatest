try{
    // From a length
    var biguint64 = new BigUint64Array(2);
    biguint64[0] = 42n;
    console.log(biguint64[0]); // 42n
    console.log(biguint64.length); // 2
    console.log(biguint64.BYTES_PER_ELEMENT); // 8

    // From an array
    var arr = new BigUint64Array([21n,31n]);
    console.log(arr[1]); // 31n

    // From another TypedArray
    var x = new BigUint64Array([21n, 31n]);
    var y = new BigUint64Array(x);
    console.log(y[0]); // 21n

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(32);
    var z = new BigUint64Array(buffer, 0, 4);

    // From an iterable
    /*
    Parse error here
    var iterable = function*(){ yield* [1n, 2n, 3n]; }(); 
    var biguint64 = new BigUint64Array(iterable); 
    */

    true;
}catch(e){
    console.log(e);
    false;
}