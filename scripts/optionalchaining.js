try{
    const adventurer = {
        name: 'Alice',
        cat: {
          name: 'Dinah'
        }
      };
      /*
      //Not supported
      const dogName = adventurer.dog?.name;
      console.log(dogName);
      // expected output: undefined
      
      console.log(adventurer.someNonExistentMethod?.());
      // expected output: undefined
      */
    false;      
}catch(e){
    console.log(e);
    false;
}