try{
    const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
    console.log('Declare: ' + previousMaxSafe);

    const maxPlusOne = previousMaxSafe + 1n;
    console.log('Addition: ' + maxPlusOne);

    const theFuture = previousMaxSafe + 2n;
    console.log('Addition: ' + theFuture);

    const multi = previousMaxSafe * 2n;
    console.log('Multiplication: ' + multi);

    const subtr = multi - 10n;
    console.log('Subtraction: ' + subtr);

    const mod = multi % 10n;
    console.log('Multiplication: ' + mod);

    const bigN = 2n ** 54n;
    console.log('BigN: ' + bigN);

    bigN * -1n;
    console.log('BigN Negative Multiplication: ' + bigN);
    
    true;
}catch(e){
    console.log(e);
    false;
}