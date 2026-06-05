function doubleBasePalindromes(n) {

  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  let totalSum = 0;

  for (let i = 1; i < n; i++) {
    const strDecimal = i.toString(10);
    if (isPalindrome(strDecimal)) {
      const strBinary = i.toString(2);
      if (isPalindrome(strBinary)) {
        totalSum += i;
      }
    }
  }
  return totalSum;
}

console.log(doubleBasePalindromes(1000)); 
console.log(doubleBasePalindromes(50000)); 
console.log(doubleBasePalindromes(1000000)); 