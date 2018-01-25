function isStrict() {
    return !this;
}

var counter = function () {
    var count = 0;
    return function () {
        return count += 1;
    };
};