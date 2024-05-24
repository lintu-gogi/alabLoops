//Next prime number, starting at n and incrementing from there.
let notprime_count=0;
let number=12;
let n=number+1;
if(n==1)
    {
        console.log("Next Prime = "+(n+1));
    }
if(n==2)
    {
        console.log("Next Prime = "+ 3);
    }
while(n>2)
{
    for(let i=2;i<n/2;i++){
        if(n%i==0){
            notprime_count=1;
            break;
        }
    }
    
    if(notprime_count==0)
        {
            console.log("Next Prime = "+ n);
            break;
        }
    n=n+1;
    notprime_count=0;
    
}