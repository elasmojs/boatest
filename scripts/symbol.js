try{
    typeof Symbol() === 'symbol';
    typeof Symbol('foo') === 'symbol';
    typeof Symbol.iterator === 'symbol';

    //Not Supported
    //console.log(JSON.stringify({[Symbol('foo')]: 'foo'}));

    true;
}catch(e){
    console.log(e);
    false;
}