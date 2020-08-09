try{
    /*
    //Not Supported
    function Foo() {
        if (!new.target) { throw 'Foo() must be called with new'; }
      }
      
      try {
        Foo();
      } catch (e) {
        console.log(e);
        // expected output: "Foo() must be called with new"
      }
    true;      
    */
   false;
}catch(e){
    console.log(e);
    false;
}