/* 02.method-shorthand(메소드 단축) */
var dog = {
    name: '감자',
    eat: function (food) {
        console.log(`${food}를 먹는다`);
    }
}

dog.eat('바나나');

/* ES6 이후부터는 메소드를 정의할 때 콜론(:)과 function 키워드를 생략한 축약 표현을 사용할 수 있다. */
var dog2 = {
    name: '감자',
    eat(food) {
        console.log(`${food}를 먹는다`);
    }
}

dog2.eat('포테이토칩');