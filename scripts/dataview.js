try{
    var buffer = new ArrayBuffer(16);
    var view = new DataView(buffer, 0);

    view.setInt16(1, 42);
    view.getInt16(1); // 42

    true;
}catch(e){
    console.log(e);
    false;
}