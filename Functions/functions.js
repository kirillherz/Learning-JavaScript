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

(function () {
    f();

    f = function () {
        console.log(1);
    };
})();
function f() {
    console.log(2);
}
f();
//что напечатает?
//2 и 1 т.к f = function... присваивает переменной f функцию в глобальной области.