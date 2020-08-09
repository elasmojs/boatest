try{
    const buffer = new ArrayBuffer(8);
    const view = new Int32Array(buffer);
    true;
}catch(e){
    console.log(e);
    false;
}