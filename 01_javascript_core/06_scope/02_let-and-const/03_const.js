/* 03.const(상수) */

/* 상수는 선언과 동시에 초기화 해 주어야 한다. */
// const x;
const x = 1;

// x = 2;

/* 일반적으로 상수는 대문자 및 스네이크 표기법(_)로 표현한다. */
const DISCOUNT_RATE = 0.15;

let price = 15000;                                  // 정가

let discountPrice = price * (1 - DISCOUNT_RATE);    // 할인율이 적용된 할인가
console.log(discountPrice);