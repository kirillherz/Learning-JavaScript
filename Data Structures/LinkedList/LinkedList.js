function List() {
    this._size = 0;
    this._SizeStack = 0;
    this._data = [];
    this._nextAdress = [];
    this._head = null;
    this._tail = null;
    this._headStack = null;
    //Алгоритмы
    this._getEmptyCellFunction;
    this._deleteItemFunction;
    this._pushFunction;
    this._popFunction;
    this._insertFunction;
    this._deleteItemFunction;
    this._unshiftFunction;

    this._getEmptyCell = function () {
        this._getEmptyCellFunction();
    };
    this._deleteItem = function (index) {
        this._deleteItemFunction(index);
    };
    this.getSize = function () {
        return this._size;
    };
    this.push = function (x) {
        this._pushFunction(x);
    };
    this.pop = function () {
        return this._popFunction();
    };
    this.insert = function (index, x) {
        this._insertFunction(index, x);
    };
    this.delete = function (index) {
        this._deleteItemFunction(index);
    };
    this.unshift = function (x) {
        this._unshiftFunction(x);
    };

    this.setGetEmptyCell = function (func) {
        this._getEmptyCellFunction = func;
    };
    this.setDeleteItem = function (func) {
        this._deleteItemFunction = func;
    };
    this.setPush = function (func) {
        this._pushFunction = func;
    };
    this.setPop = function (func) {
        this._popFunction = func;
    };
    this.setInsert = function (func) {
        this._insertFunction = func;
    };
    this.setDelete = function (func) {
        this._deleteItemFunction = func;
    };
    this.setUnshift = function (func) {
        this._deleteItemFunction = func;
    };
}

function _getEmptyCell() {
    var index;
    if (this._headStack === null) {
        this._data.push(null);
        this._nextAdress.push(null);
        index = this._data.length - 1;
    } else {
        index = this._headStack;
        this._headStack = this._nextAdress[this._headStack];
        this._sizeStack -= 1;
    }
    return index;
}