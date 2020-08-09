try{
    try {
        nonExistentFunction();
      } catch (error) {
        console.log(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
      true;
}catch(e){
    console.log(e);
    false;
}