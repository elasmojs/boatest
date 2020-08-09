try{
    function calcRectArea(width, height) {
        return width * height;
      }
      
      console.log(calcRectArea(5, 6));
      // expected output: 30
      true;      
}catch(e){
    console.log(e);
    false;
}