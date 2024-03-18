/* 02. recursive-function(재귀 함수) */
/* 함수가 자기 자신을 호출하는 것을 재귀호출이라고 한다. */

function factorial(n) {
    if (n <= 1)  return 1;
    return n * factorial(n - 1);
}

console.log(factorial(1));      // 1! = 1
console.log(factorial(2));      // 2! = 2 * 1
console.log(factorial(3));      // 3! = 3 * 2 * 1
console.log(factorial(4));      // n! = n * (n - 1) * (n - 2) *... 
console.log(factorial(5));