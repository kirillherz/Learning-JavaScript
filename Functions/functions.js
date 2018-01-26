function isStrict() {
    return !this;
}

var counter = function () {
    var count = 0;
    return function () {
        return count += 1;
    };
};

function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
test();
//Какой результат?
//undefined и 2