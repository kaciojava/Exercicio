function smallestMult(n) {

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = lcm(result, i);
  }

  return result;
}

console.log(smallestMult(5));  // 60
console.log(smallestMult(7));  // 420
console.log(smallestMult(10)); // 2520
console.log(smallestMult(20)); // 232792560