try{
    let fruits = ["Apple", "Banana"];
    console.log(fruits.length);

    let first = fruits[0];
    console.log(first);

    fruits.forEach(function(item, index, array) {
        console.log(item, index)
    });

    let newLength = fruits.push('Orange');
    console.log(fruits);

    let last = fruits.pop();
    console.log(fruits.length == 2);

    first = fruits.shift();
    console.log(fruits.length == 1);

    newLength = fruits.unshift('Strawberry');
    console.log(fruits.length == 2);

    fruits.push('Mango');
    let pos = fruits.indexOf("Banana");
    console.log(pos == 1);

    //let removedItem = fruits.splice(pos, 1);
    //console.log(removedItem);
    console.log(fruits.splice); 
    console.log('Splice not implemented'); //Splice not implemented

    let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
    console.log(vegetables);

    let shallowCopy = fruits.slice();
    console.log(shallowCopy);
    true;
}catch(e){
    console.log(e);
    false;
}