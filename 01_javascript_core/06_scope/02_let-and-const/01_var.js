/* 01. var */

/* 1. 변수 중복 선언 허용 */
var msg = '안녕하세요';
console.log(msg);

var msg = '안녕히 가세요';
console.log(msg);

var msg;
console.log(msg);       // 초기화를 하지 않은 중복된 변수는 무시된다.

/* 2. 함수 레벨 스코프를 가지는 문제 */
var i = 0;

for (var i = 0; i < 10; i++) {

}

console.log(i);

/* 3. 변수 호이스팅 */
console.log(test);

test = '반갑';
var test;