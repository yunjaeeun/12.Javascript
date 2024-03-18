/* 01. global-and-local-scope(전역과 지역 스코프) */

var x = 'global x';
var y = 'global y';

function outer() {
    var z = "outer's local z"

    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x = "inner's local x";

        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}

outer();