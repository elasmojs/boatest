try{
    const duck = {
        name: 'Maurice',
        color: 'white',
        greeting: function() {
            console.log('Quaaaack! My name is ${this.name}');
        }
    };
    
    console.log(Reflect.has(duck, 'color'));
    // true
    console.log(Reflect.has(duck, 'haircut'));
    // false
    true;
}catch(e){
    console.log(e);
    false;
}