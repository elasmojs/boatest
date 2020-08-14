try{
    //SyntaxError not supported
    try {
        throw new SyntaxError('Hello', 'someFile.js', 10);
    } catch (e) {
        //console.error(e instanceof SyntaxError); // true
        console.log(e.message);                // Hello
        console.log(e.name);                   // SyntaxError
        console.lot(e.fileName);               // someFile.js
        console.log(e.lineNumber);             // 10
        console.log(e.columnNumber);           // 0
        console.log(e.stack);                  // @debugger eval code:3:9
    }
    true;
}catch(e){
    console.log(e);
    false;
}