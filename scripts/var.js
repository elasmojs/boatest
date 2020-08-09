try{
    var x = 1;

    if (x === 1) {
    var x = 2;

    console.log(x);
    // expected output: 2
    }

    console.log(x);
    // expected output: 2
    true;
}catch(e){
    console.log(e);
    false;
}