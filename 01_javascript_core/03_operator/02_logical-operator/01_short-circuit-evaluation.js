/* 01. short-circuit-evaluation(논리 연산자) */

/* 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것 */

console.log('=== OR ===')
/* 1. OR의 경우(가장 앞에 있는 true로 판별) */
console.log('apple' || 'banana');       // true || true인 셈이다.
console.log('apple' || false);       // true || false -> apple
console.log('' || 'banana');       // false || true -> banana


console.log('=== AND ===')
/* 2. AND의 경우(가장 뒤에 있는 true로 판별) */
console.log('apple' && 'banana');       // true && true -> banana
console.log(false && 'banana');         // false && false -> false
console.log('apple' && false);          // true && false -> false

var num = 2;

/*
if(num % 2 == 0) {
    console.log('짝수입니다.');
} else {
    console.log('홀수입니다.');
}
*/

/* 단축 평가를 활용하여 같은 결과를 얻을 수 있다. */
num % 2 == 0 && console.log('짝수입니다.');
num % 2 != 0 || console.log('홀수입니다.');