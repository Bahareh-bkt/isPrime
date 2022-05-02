var n = prompt("How many prime number would you like to calculate?");

function isPrime(number)
{   
    if (number <=1) return false;
    if (number ===2) return true;
    else{
      for (let i =2 ; i<number ; i++)
      {if (number % i === 0)
         return false;
      }
      return true;
    }
}
/*console.log(isPrime(6));  */

function getNprimes(n){
    const arr = [];
    let i = 2;
    let sum= 0;
    let count = 0;

    while(arr.length < n){
        if (isPrime(i)){
            arr.push(i);
            sum+=i;
            count++;
        }
        i++;
    }
    console.log(arr);
    return sum;

}
console.log("Sum of the first ", n , " prime numbers : ",getNprimes(n));  





