try{
    (function(msg){
        function printmsg(m){
            console.log('Inner: ' + m);
        }
        printmsg(msg);
    })("hello2");
    true;
}catch(e){
    console.log(e);
    false;
}