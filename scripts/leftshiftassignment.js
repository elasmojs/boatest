try{
    let a = 5; // 00000000000000000000000000000101

    a <<= 2;   // 00000000000000000000000000010100

    console.log(a);
    // expected output: 20

    true;
}catch(e){
    console.log(e);
    false;
}