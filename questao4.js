function largestPalindromeProduct(n) {

  const max = Math.pow(10, n) - 1;
  const min = Math.pow(10, n - 1);
  
  let maxProduct = 0;

  function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
  }
  
  for (let i = max; i >= min; i--) {
    for (let j = i; j >= min; j--) {
      let product = i * j;


      if (product <= maxProduct) {
        break;
      }

      if (isPalindrome(product)) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
}


console.log(largestPalindromeProduct(2)); //retorna 9009
console.log(largestPalindromeProduct(3)); //retorna 906609