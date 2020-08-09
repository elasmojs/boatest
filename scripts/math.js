try{
    function degToRad(degrees) {
        return degrees * (Math.PI / 180);
    };
    console.log("32 deg in rad: " + degToRad(32));
    
    function radToDeg(radian){
        //Parse error here
        //let deg = radian / (Math.PI / 180);
        let divs = Math.PI / 180;
        let deg = radian / divs;
        return deg;
    };
    console.log("0.559 rad in deg: " + Math.floor(radToDeg(0.559)));


    function random(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    }
    
    console.log("Random number (1-10): " + random(1, 10));

    true;
}catch(e){
    console.log(e);
    false;
}