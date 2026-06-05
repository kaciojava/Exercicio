function nthPrime(n) {
 
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  let candidate = 1;

  while (count < n) {
    candidate++;
    if (isPrime(candidate)) {
      count++;
    }
  }

  return candidate;
}

console.log(nthPrime(6));     // 13
console.log(nthPrime(10));    // 29
console.log(nthPrime(10001)); // 104743