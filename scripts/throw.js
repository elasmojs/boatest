try{
    function getArea(width, height) {
        if (width <0 || height <0) {
          throw 'Parameter is invalid!';
        }
    }
      
      try {
        getArea(3, -1);
      } catch (e) {
        console.log(e);
        // expected output: "Parameter is not a number!"
      }
    true;      
}catch(e){
    console.log(e);
    false;
}