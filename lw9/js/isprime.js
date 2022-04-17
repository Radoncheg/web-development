function isPrimeNumber(n) {
  let isPrime;
  let arr = [];

  if (!Array.isArray(n)) arr.push(n);
  else arr = n;

  for (let i = 0; i < arr.length; i++ ) {
    isPrime = true;

    for (let j = 2; j < arr[i]; j++) {

      if ((arr[i] % j === 0) || !Number.isInteger(arr[i])) {
        isPrime = false;
        break;
      }
    }

    if ((isPrime) && Number.isInteger(arr[i]) && arr[i] > 1) console.log(arr[i], 'is prime number');
    else if (!isPrime || !Number.isInteger(arr[i]) || arr[i] <= 1) console.log(arr[i], 'is not prime number');
  }
}