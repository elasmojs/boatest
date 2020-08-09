try{
    let today = new Date()
    let birthday = new Date('December 17, 1995 03:24:00');
    let birthday = new Date('1995-12-17T03:24:00')
    let birthday = new Date(1995, 11, 17);           
    // the month is 0-indexed
    let birthday = new Date(1995, 11, 17, 3, 24, 0)
    let birthday = new Date(628021800000)            
    // passing epoch timestamp

    let date    = ( new Date() ).toLocaleDateString().split("/")
    let time  = ( new Date() ).toLocaleTimeString().slice(0,7).split(":")

    // Using Date objects
    let start = Date.now()
    console.log(new Date());
    let end = Date.now()
    let elapsed = end - start 
    // elapsed time in milliseconds

    true;
}catch(e){
    console.log(e);
    false;
}