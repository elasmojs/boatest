try{
    try {
        throw new ReferenceError('Hello', 'someFile.js', 10)
    } catch (e) {
        //instanceof creates parse error
        //console.log(e instanceof ReferenceError)  // true
        console.log(e.message);
        // "Hello"
        
        /* 
        //Not working as expected
        console.log(e.name);                        // "ReferenceError"
        console.log(e.fileName);                   // "someFile.js"
        console.log(e.lineNumber);                 // 10
        console.log(e.columnNumber);               // 0
        console.log(e.stack);                      // "@Scratchpad/2:2:9\n"
        */
    }
    true;
}catch(e){
    console.log(e);
    false;
}