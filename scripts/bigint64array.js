try{
    // From a length
    var bigint64 = new BigInt64Array(2);
    bigint64[0] = 42n;
    console.log(bigint64[0]); // 42n
    console.log(bigint64.length); // 2
    console.log(bigint64.BYTES_PER_ELEMENT); // 8

    // From an array
    var arr = new BigInt64Array([21n,31n]);
    console.log(arr[1]); // 31n

    // From another TypedArray
    var x = new BigInt64Array([21n, 31n]);
    var y = new BigInt64Array(x);
    console.log(y[0]); // 21n

    // From an ArrayBuffer
    var buffer = new ArrayBuffer(32);
    var z = new BigInt64Array(buffer, 0, 4);

    // From an iterable
    /*
    Parse error here
    var iterable = function*(){ yield* [1n, 2n, 3n]; }(); 
    var bigint64 = new BigInt64Array(iterable); 
    BigInt64Array[1n, 2n, 3n]
    */
    
    true;
}catch(e){
    console.log(e);
    false;
} 