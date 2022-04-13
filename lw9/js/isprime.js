function isPrimeNumber(n) {
    let isPrime;
    let Arr = [];
    if (!Array.isArray(n)) {
        Arr.push(n)
    }
    else {
        Arr = n
    }
    for (let i = 0; i < Arr.length; i++ ) {
        isPrime = true;
        for (let j = 2; j < Arr[i]; j++) {
            if ((Arr[i] % j === 0) || !Number.isInteger(Arr[i])) {
                isPrime = false;
                console.log(Arr[i], ' is not prime number');
                break;
            }
        }
        if ((isPrime) && Number.isInteger(Arr[i])) {
            console.log(Arr[i], ' is prime number');
        }
        else{
            if (!Number.isInteger(Arr[i])) {
                console.log(Arr[i], ' is not prime number');
            }
        }

    }
}