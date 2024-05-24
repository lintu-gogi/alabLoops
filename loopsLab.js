let check3=0;
let check5=0;
for(let i=1;i<=100;i++){
    if(i%3==0){
        check3=1;
    }
    if(i%5==0){
        check5=1;
    }
    if(check3==1 && check5==1){
        
            console.log("Fizz Buzz");
    }
    else if(check3==1){
            console.log("Fizz");
    }
    else if(check5==1){
            console.log("Buzz")
    }
    else
    {
            console.log(i);
    }
    check3=0;
    check5=0;
}