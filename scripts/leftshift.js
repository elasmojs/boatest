try{
    const a = 5;         // 00000000000000000000000000000101
    const b = 2;         // 00000000000000000000000000000010

    console.log(a << b); // 00000000000000000000000000010100
    // expected output: 20
    true;
}catch(e){
    console.log(e);
    false;
}