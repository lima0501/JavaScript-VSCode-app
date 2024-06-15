let maxNumber = 6; // number up to which prime numbers are to be filtered; number 6 is only used as an example 

function sieveOfEratosthenes(maxNumber){
    const isPrime = new Array(maxNumber + 1).fill(true); // boolean array of  length maxNumber+1 in order to represent 
                                                         //numbers from 0 to maxNumber
isPrime[0] = false; // determine first entry of array (index 0) as false (number(=index) 0 is not prime 
                    //per definition => false)
isPrime [1] = false; // determine second entry of array (index 1) as false (number (=index) 1 is not prime 
                     //per definition => false)
const primes = []; // declaration of array named "primes" 

for (let number = 2; number <= maxNumber; number +=1){ // number = 2 (first prime number); for-loop continues as 
                                                       //long as number is less than or equal to maxNumber (set in line 1)
    if (isPrime[number]=== true){ 
        primes.push(number); // number is added to array prime as long as if condition (index=number of isPrime array 
                             //returns true) is true
        let nextNumber = number * number; //nextNumber is defined as number*number because smaller multiples of number 
                                          // will already be marked as false
                                          // BUT: if maxNumber is pretty large it should be changed to nextNumber=2*number
                                          // in order to prevent an overflow 
        while (nextNumber <= maxNumber) { // as long as nextNumber is smaller than or equal to maxNumber the element 
                                          //with index=nextNumber of array isPrime is set to false and afterwards the 
                                          //value of number is added to the value of nextNumber
            isPrime[nextNumber]=false;
            nextNumber += number;
        }
     }
}
return primes; //returns the array primes which contains every prime number up to the defined value maxNumber 
}
console.log(sieveOfEratosthenes(maxNumber)); //returns the result of the function sieveOfEratosthenes
