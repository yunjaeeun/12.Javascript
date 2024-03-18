/* 02. differences-from-regular-function(일반 함수와의 차이점들) */
function Student(name, age) {
    // console.log('this', this)
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

/*
  일반 함수와 생성자 함수의 특별한 형식적 차이는 없다.
  (첫 문자를 대문자로 기술하려 구별하는 노력 정도)
  new 연산자 없이 호출하면 일반 함수로 동작한다.
 */
const student = Student('강감찬', 35);
// console.log(student);

/*
  생성자 함수가 new 연산자 없이 호출되는 것을 방지하기 위해서 ES6에서는 new.target을 지원한다.
  (new 연산자 없이 호출해도 new를 뭍여주게 해서 빌트인 함수로 만들기)
 */

function Dog(name, age) {
    console.log("new.target: ", new.target);
    if(!new.target) {
        return new Dog(name, age);
    }
    this.name = name;
    this.age = age;
}

const dog = Dog('뽀삐', 3);
console.log(dog);