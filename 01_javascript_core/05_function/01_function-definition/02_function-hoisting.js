/* 02.function-hoisting(함수 호이스팅) */

console.log(hello('둘리'));
// console.log(hi('고길동'));

/* 함수 선언문(js 코드 상에서 먼저 해석됨, 반드시 이름이 있어야 함(익명함수 X)) */
function hello(name) {
    return `${name}님 반가워요!`;
}

/* 함수 표현식 */
var hi = function(name) {
    return `${name} 안녕~`;
}

console.log(`함수 표현식 이후: ${hi('나중에')}`)