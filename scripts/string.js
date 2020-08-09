try{
    const string1 = "A string primitive";
    const string2 = 'Also a string primitive';
    
    //Not supported
    //const string3 = `Yet another string primitive`;
    
    const string4 = new String("A String object");

    console.log('cat'.charAt(1)); // "a"
    
    //Not supported
    //console.log('cat'[1]); // "a"

    let a = 'a'
    let b = 'b'
    if (a < b) { // true
        console.log(a + ' is less than ' + b)
    } else if (a > b) {
        console.log(a + ' is greater than ' + b)
    } else {
        console.log(a + ' and ' + b + ' are equal.')
    }

    let s_prim = 'foo';
    let s_obj = new String(s_prim);

    console.log(typeof s_prim); // Logs "string"
    console.log(typeof s_obj); // Logs "object"

    /*
    //eval not supported
    let s1 = '2 + 2';              // creates a string primitive
    let s2 = new String('2 + 2');  // creates a String object
    console.log(eval(s1));         // returns the number 4
    console.log(eval(s2));         // returns the string "2 + 2"
    */

   let longString = "This is a very long string which needs " +
   "to wrap across multiple lines because " +
   "otherwise my code is unreadable."

   /*
   // \ escape sequence not supported
   let longString = "This is a very long string which needs \
   to wrap across multiple lines because \
   otherwise my code is unreadable.";
    */

   true;
}catch(e){
    console.log(e);
    false;
}