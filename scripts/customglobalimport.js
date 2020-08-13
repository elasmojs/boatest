try{
    require('./scriptlib/customlib.js');
    let val = Calc.add(3, 3);
    console.log('Add Result (3 + 3): ' + val);

    let val2 = Calc.subtract(9, 3);
    console.log('Subtract Result (9 - 3): ' + val2);
    true;
}catch(e){
    console.log(e);
    false;
}