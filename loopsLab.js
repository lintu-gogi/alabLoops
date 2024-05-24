//Fizz Buzz Problem
for(let i=1;i<=100;i++){
    if(i%3==0){
        check3=1;
    }
    if(i%5==0){
        check5=1;
    }
    if(i%3==0 && i%5==0){
        
            console.log("Fizz Buzz");
    }
    else if(i%3==0){
            console.log("Fizz");
    }
    else if(i%5==0){
            console.log("Buzz")
    }
    else
    {
            console.log(i);
    }
    
}