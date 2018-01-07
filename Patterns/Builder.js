function Pizza() {
    var dough = "";
    var sauce = "";
    var topping = "";
    this.setDough = function (val) {
        dough = val;
    };
    this.setSauce = function (val) {
        sauce = val;
    };
    this.setTopping = function (val) {
        topping = val;
    };
    this.getDough = function () {
        return dough;
    };
    this.getSauce = function () {
        return sauce;
    };
    this.getTopping = function () {
        return topping;
    };
}

