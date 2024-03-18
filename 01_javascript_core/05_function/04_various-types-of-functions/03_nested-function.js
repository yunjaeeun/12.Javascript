/* 03. nested-function(중첩 함수) */

function outer () {
    var outerVal = '외부함수';

    function inner () {
        var innerVal = '내부 함수';

        console.log(outerVal, innerVal)
    }

    inner();
}

outer();