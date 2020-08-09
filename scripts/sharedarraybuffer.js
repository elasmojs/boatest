try{
    var sab = new SharedArrayBuffer(1024);
    true;
}catch(e){
    console.log(e);
    false;
}