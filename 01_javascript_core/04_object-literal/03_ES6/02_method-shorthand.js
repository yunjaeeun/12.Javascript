/* 02.method-shorthand(메소드 단축) */
var dog = {
    name: '감자',
    eat: function (food) {
        console.log(`${food}를 먹는다`);
    }
}

dog.eat('바나나');

var dog2 = {
    name: '감자',
    eat(food) {
        console.log(`${food}를 먹는다`);
    }
}

dog2.eat('포테이토칩');