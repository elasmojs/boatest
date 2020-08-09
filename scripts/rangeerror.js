try{
    function check(n)
    {
        if( !(n >= -500 && n <= 500) )
        {
            throw new RangeError("The argument must be between -500 and 500.")
        }
    }

    try
    {
        check(2000)
    }
    catch(error)
    {
        console.log("RangeError works!");
    }
    true;
}catch(e){
    console.log(e);
    false;
}