try{
    let a = 5;      //  00000000000000000000000000000101

    a >>= 2;        //  00000000000000000000000000000001
    console.log(a);
    // expected output: 1

    let b = -5;     // -00000000000000000000000000000101

    b >>= 2;        // -00000000000000000000000000000010
    console.log(b);
    // expected output: -2
    true;
}catch(e){
    console.log(e);
    false;
}