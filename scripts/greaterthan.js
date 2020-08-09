try{
    console.log(5 > 3);
    // expected output: true

    console.log(3 > 3);
    // expected output: false

    //Not supported
    //console.log(3n > 5);
    // expected output: false

    console.log('ab' > 'aa');
    // expected output: true

    true;
}catch(e){
    console.log(e);
    false;
}