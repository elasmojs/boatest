try{
    const Employee = {
        firstname: 'John',
        lastname: 'Doe'
      };
      
      console.log(Employee.firstname);
      // expected output: "John"
      
      delete Employee.firstname;
      
      console.log(Employee.firstname);
      // expected output: undefined
    true;      
}catch(e){
    console.log(e);
    false;
}