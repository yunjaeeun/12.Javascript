/* 01. array-method(배열 메소드) */

const foodList = ['물회','삼계탕', '냉면', '수박', '물회'];

/* indexOf */
console.log(`foodlist.indexOf('물회'): ${foodList.indexOf('물회')}`);        // 0 (가장 처음에 있는 인덱스 반환)
console.log(`foodlist.indexOf('삼겹살'): ${foodList.indexOf('삼겹살')}`);    // -1(존재하지 않으면 -1 반환)

/* includes */
console.log(`foodlist.includes('삼겹살'): ${foodList.includes('물회')}`);    // true 
console.log(`foodlist.includes('삼겹살'): ${foodList.includes('삼겹살')}`);  // false

const chineseFood = ['짜장면', '짬뽕', '탕수육'];

/* push */
chineseFood.push('팔보채');                                                 // 뒤에서부터 추가 된다
chineseFood.push('양장피');                     

/* push 후 chinesefood */
console.log(`push 후: ${chineseFood}`);

/* pop */
// chineseFood.pop('양장피');                                                  // 뒤에서부터 제거된다.
console.log(`chineseFood.pop: ${chineseFood.pop()}`);                      // 제거하면서 출력도 가능하다.
console.log(`pop 후: ${chineseFood}`)

const chickenList = ['양념치킨', '후라이드', '파닭'];

/* unshift */
console.log(`chickenList.unshift(): ${chickenList.unshift('간장치킨')}`);   // 배열의 앞에서부터 추가된다.
console.log(`chickenList.unshift(): ${chickenList.unshift('마늘치킨')}`);

console.log(`unshift 후: ${chickenList}`);

/* shift */
// console.log(`chickenList.shift(): ${chickenList.shift()}`);
console.log(`chineseFood.shift: ${chickenList.shift()}`);                   // 배열의 앞에서부터 제거된다.

console.log(`shift 후: ${chickenList}`);

/* concat: 두 개 이상의 배열을 결합하여 새로운 배열을 반환(결합 순서의 유의미) */
const idol1 = ['1-1 서태지와 아이들', '1-2 소녀시대'];
const idol2 = ['2-1 HOT', '2-2 잭스키스'];
const idol3 = ['3-1 핑클', '3-2 블랙핑크'];

console.log(`idol1 기준으로 idol2 배열을 concat: ${idol1.concat(idol2)}`);
// console.log(`idol2 기준으로 idol1 배열을 concat: ${[...idol2, ...idol1]}`);     // ES6할 때 스프레드 연산자 배울 때 다시 설명
console.log(`idol3 기준으로 idol1, idol2 배열을 concat: ${idol3.concat(idol1, idol2)}`);

/* slice: 배열의 요소 선택 복사하기 */
/* splice: 배열의 index 위치의 요소 제거 및 추가 */
const front = ['HTML', 'CSS', 'JavaScript', 'Vue'];

console.log(`front.slice(1, 3): ${front.slice(1, 3)}`);     // CSS, JavaScript(원본에는 영향을 주지 않는다.)
console.log(`front: ${front}`);

/* splice(인덱스, 제거할 길이, 추가할 값1, 추가할 값2, ....) */
console.log(`front.splice(3, 1, "JDBC"): ${front.splice(3, 1, "JDBC")}`);     
console.log(`front: ${front}`);

/* join: 배열을 우리가 원하는 구분자와 함께 결합하여 문자열로 반환 */
const snackList = ['사탕', '초콜렛', '껌', '마이쮸'];
console.log(`snackList.join()): ${snackList.join()}`);
console.log(`snackList.join('/'): ${snackList.join('/')}`);