try{
    // encodes characters such as ?,=,/,&,:
    console.log(encodeURIComponent('test?'));
    // expected output: "test%3F"

    true;
}catch(e){
    console.log(e);
    false;
}