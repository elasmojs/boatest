try{
    /*
    function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
        });
    }
    
    //Lexical error in line 12
    let AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
    
    let a = new AsyncFunction('a', 
                                'b', 
                                'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');
    
    a(10, 20).then(v => {
        console.log(v); // prints 30 after 4 seconds
    });
    */
    console.log('Lexical error in line 12')
    false;

}catch(e){
    console.log(e);
    false;
}