/* 02.convert-to-number(숫자 타입으로 변환) */

console.log('========= 숫자 타입으로 변환 =========')

/* 덧셈을 제외한 산술 연산자는 피연산자들이 숫자여야 성립하므로 피연산자들을 숫자 타입으로 암묵적 형변환. */
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % 'JavaScript');
console.log(10 > '5');

console.log(+'');
console.log(+'1');
console.log(+'JavaScript');
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
// console.log(+Symbol());       // 에러 발생
console.log(+{});
console.log(+[]);
console.log(+function(){});



