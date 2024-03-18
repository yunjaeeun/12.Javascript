/* 04. callback-function(콜백 함수) */

/* 전달 받은 값을 1 증가시켜 반환하는 함수 */
function increase(value) {
    return value + 1;
}

/* 전달 받은 값을 1 감소시켜 반환하는 함수 */
function decrease(value) {
    return value - 1;
}

/* 전달 받은 함수에 전달 받은 값을 적용시켜 주는 고차 함수(전달 받은 함수를 활용하는 함수) */
function apply(func, value) {       // func => 콜백함수
    return func(value);
}

console.log(apply(increase, 5));    // increase 함수를 콜백 함수라고 한다.
console.log(apply(decrease, 1));

/* 배열의 정렬을 다룰 떄의 예시 */
console.log([3, 2, 1, 5, 4].sort(function(left, right) {return right-left} ));