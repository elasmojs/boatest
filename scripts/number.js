try{
    const biggestNum     = Number.MAX_VALUE
    const smallestNum    = Number.MIN_VALUE
    const infiniteNum    = Number.POSITIVE_INFINITY
    const negInfiniteNum = Number.NEGATIVE_INFINITY
    const notANum        = Number.NaN

    const biggestInt  = Number.MAX_SAFE_INTEGER; //  (253 - 1) =>  9007199254740991
    const smallestInt = Number.MIN_SAFE_INTEGER; // -(253 - 1) => -9007199254740991

    console.log(Number('123'));     // 123
    console.log(Number('123') === 123); /// true
    console.log(Number('12.3'));    // 12.3
    console.log(Number('12.00'));   // 12
    console.log(Number('123e-1'));  // 12.3
    
    //Expected 0 but returns NaN
    //console.log(Number(''));        // 0
    
    console.log(Number(null));      // 0
    
    /*
    //Not supported yet
    console.log(Number('0x11'));    // 17
    console.log(Number('0b11'));    // 3
    console.log(Number('0o11'));    // 9
    */

    console.log(Number('foo'));     // NaN
    console.log(Number('100a'));    // NaN

    //Expected Infinity returns NaN
    //console.log(Number('-Infinity')); //-Infinity

    true;
}catch(e){
    console.log(e);
    false;
}