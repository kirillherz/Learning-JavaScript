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

function PizzaBuilder() {
    this._pizza;
    this.getPizza = function () {
        return this._pizza;
    };
    this.createNewPizzaProduct = function () {
        this._pizza = new Pizza();
    };
}

function HawaiianPizzaBuilder() {
    PizzaBuilder.call(this);
    this.buildDough = function () {
        this._pizza.setDough("cross");
    };
    this.buildSauce = function () {
        this._pizza.setSauce("hot");
    };
    this.buildTopping = function () {
        this._pizza.setTopping("pepperoni+salami");
    };
}
function Waiter() {
    var _pizzaBuilder;
    this.setPizzaBuilder = function (pb) {
        _pizzaBuilder = pb;
    };
    this.getPizza = function () {
        return _pizzaBuilder.getPizza();
    };
    this.constructPizza = function () {
        _pizzaBuilder.createNewPizzaProduct();
        _pizzaBuilder.buildDough();
        _pizzaBuilder.buildSauce();
        _pizzaBuilder.buildTopping();
    };
}
