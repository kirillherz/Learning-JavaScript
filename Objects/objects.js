function Animal(name) {
    this._name = toFirstUpperCase(name);
    ;
    console.log("Animal");
    this.runMsg = "run animal: ";
}

Animal.prototype.run = function () {
    console.log(this.runMsg);
};
Animal.prototype.toString = function () {
    return this.name;
};
Object.defineProperty(Animal.prototype, "toString", {enumerable: false, configurable: false});
Object.defineProperty(Animal.prototype, "name", {
    get: function () {
        return this._name;
    },
    set: function (value) {
        this._name = toFirstUpperCase(value);
    }});

function Rabbit() {
    Animal.apply(this, arguments);
    console.log("Rabbit");
    this.jumpMsg = "jump";
}
//Rabbit.prototype = Animal.prototype; Не подходит т.к например
//Rabbit.prototype.run и Animal.prototype.run буду ссылаться на одну область
//При вызове родительской функции run произойдет бесконечная рекурсия
//Rabbit.prototype = new Animal(); Не подходит т.к конструктор Animal может
//иметь побочный эффект 
Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.jump = function () {
    console.log(this.jumpMsg);
};

Rabbit.prototype.run = function () {
    Animal.prototype.run.call(this);
    console.log("rabbit");
};

function showObjectProperty() {
    for (var key in this) {
        if (!this.hasOwnProperty(key)) {
            continue;
        } else {
            console.log(key + ": '" + this[key] + "'");
        }
    }
}

function toFirstUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
String.prototype.toFirstUpperCase = toFirstUpperCase;

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());
//Напечатает 'Aurelio De Rosa' и "John Doe'
//Исправьте предыдущий вопрос так, чтобы последний console.log ( ) стал Aurelio De Rosa.
console.log(bind(test, obj.prop)());

function bind(func, context) {
    return function () {
        return func.apply(context, arguments);
    };
}
function newObj(constructor) {
    var args = Array.prototype.slice.call(arguments, 1);
    var obj = Object.create(constructor);
    constructor.apply(obj, args);
    return obj;
}
var b = 2;
(function () {
    var a = b = 5;
})();
console.log(b);
//Что будет написано на консоли?
//ответ 5


String.prototype.repeatify = String.prototype.repeatify || function (times) {
    var str = "";
    for (var i = 0; i !== times; i++) {
        str += this;
    }
    return str;
};
console.log('hello'.repeatify(3));
