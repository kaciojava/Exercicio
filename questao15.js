function latticePaths(gridSize) {
 
  function factorial(n) {
    let res = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
      res *= i;
    }
    return res;
  }

  const n = BigInt(gridSize);
  const result = factorial(2n * n) / (factorial(n) * factorial(n));

  return Number(result);
}

console.log(latticePaths(4));
console.log(latticePaths(9));  
console.log(latticePaths(20)); 