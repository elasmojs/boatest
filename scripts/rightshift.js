try{
    const a = 5;          //  00000000000000000000000000000101
    const b = 2;          //  00000000000000000000000000000010
    const c = -5;         // -00000000000000000000000000000101

    console.log(a >> b);  //  00000000000000000000000000000001
    // expected output: 1

    console.log(c >> b);  // -00000000000000001111111111111110
    // expected output: -2
    true;
}catch(e){
    console.log(e);
    false;
}