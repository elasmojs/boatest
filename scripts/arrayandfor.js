try{
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    for(i=0;i<days.length;i++)
        console.log((i+1) + ". " + days[i]);

    true;
}catch(e){
    console.log(e);
    false;
}