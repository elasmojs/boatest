try{
    const getRectArea = function(width, height) {
        return width * height;
    };
    
    console.log(getRectArea(3, 4));
    // expected output: 12
    
    true;
}catch(e){
    console.log(e);
    false;
}