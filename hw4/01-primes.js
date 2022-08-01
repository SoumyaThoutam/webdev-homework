const getPrimes = () => {
  // Add your code here
  let num = 100;
  console.log(2);
  for (let i = 3; i <= num; i += 2) {
    if (isPrime(i)) console.log(i);
  }
};

function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

getPrimes();
// 2
// 3
// 5
// 7
// 11
// 13
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// ...
