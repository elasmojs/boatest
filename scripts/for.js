try{
    let str = '';

    for (let i = 0; i < 9; i++) {
    str = str + i;
    }

    console.log(str);
    // expected output: "012345678"

    true;
}catch(e){
    console.log(e);
    false;
}