try{
    var jsonStr = '{"name":"John Doe", "age": 33, "score":3.25, "hobbies":["tennis", "books"], "address":{"line1":"321, Lakeview Apts", "line2":"Hillside Ave", "city":"Boston", "state":"MA"}}';
    var jsonObj = JSON.parse(jsonStr);
    console.log("Name and City: " + jsonObj.name + " - " + jsonObj.address.city);
    console.log(JSON.stringify(jsonObj));
    true;
}catch(e){
    console.log(e);
    false;
}