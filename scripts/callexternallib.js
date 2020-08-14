try{
    require('./scriptlib/externallib.js');
    callexternal();
    true;
}catch(e){
    console.log(e);
    false;
}