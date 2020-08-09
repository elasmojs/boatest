try{
    let re = /(\w+)\s(\w+)/
    let str = 'John Smith'
    let newstr = str.replace(re, '$2, $1')
    console.log(newstr)

    /*
    //Does not work
    let text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'
    let lines = text.split(/\r\n|\r|\n/)
    console.log(lines) // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
    */

    /*
    //RegExp parse error
    let s = 'Please yes\nmake my day!'
    console.log(s.match(/yes.*day/));
    // Returns null
    console.log(s.match(/yes[^]*day/));
    // Returns ["yes\nmake my day"]
    */

   let text = 'Образец text на русском языке'
   let regex = /[\u0400-\u04FF]+/g
   
   let match = regex.exec(text);
   console.log(match[0]); // logs 'Образец'
   console.log(regex.lastIndex); // logs '7'
   
   let match2 = regex.exec(text);
   console.log(match2[0]);  // logs 'на' [did not log 'text']
   console.log(regex.lastIndex);    // logs '15'

   let url = 'http://xxx.domain.com'
   console.log(/[^.]+/.exec(url)[0].substr(7)) // logs 'xxx'

    true;
}catch(e){
    console.log(e);
    false;
}