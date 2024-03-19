/* 01. object-distructuring-assignment-basic-syntax(객체 구조분해 할당 기본문법) */

let pants = {
    productName: '배기팬츠',
    color: '검정색',
    price: 30000,
    getInfo() {
        console.log(this.productName, '좋아~');
    }
};

// let productName = pants.productName;
// let color = pants.color;
// let price = pants.price;

// let {productName, color, price} = pants;
let {color,productName, price, getInfo} = pants;     // 순서는 상관 없음.

console.log(productName, color, price, getInfo);
pants.getInfo();

/* 객체 구조분해 할당으로 꺼낸 변수 대신 다른걸 쓰고 싶다면.. */
let {color: co, price: pr, productName: pn} = pants;
console.log(co, pr, pn);