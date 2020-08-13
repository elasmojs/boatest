try{
    let retStr = rusty_hello("Boa! Boa!");
    console.log('Result: ' + retStr);
    true;
}catch(e){
    console.log(e);
    false;
}