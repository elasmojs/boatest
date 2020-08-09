try{
    let result = '';
    let i = 0;

    do {
    i = i + 1;
    result = result + i;
    } while (i < 5);

    console.log(result);
    // expected result: "12345"
    true;
}catch(e){
    console.log(e);
    false;
}