function List() {
    this._size = 0;

    //Алгоритмы
    this._pushFunction;
    this._popFunction;
    this._insertFunction;
    this._deleteItemFunction;
    this._unshiftFunction;
    this._shiftFunction;

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

    this.shift = function () {
        this._shiftFunction();
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

    this.setShiftFunction = function (func) {
        this._shiftFunction(func);
    };
}

function ListBasedArray() {
    List.call(this);
    this._data = [];
    this._nextAdress = [];
    this._head = null;
    this._tail = null;
    this._headStack = null;
    //Алгоритмы
    this._getEmptyCellFunction;
    this._deleteItemFunction;

    this.setGetEmptyCell = function (func) {
        this._getEmptyCellFunction = func;
    };
    this.setDeleteItem = function (func) {
        this._deleteItemFunction = func;
    };

    this._getEmptyCell = function () {
        return this._getEmptyCellFunction();
    };
    this._deleteItem = function (index) {
        this._deleteItemFunction(index);
    };
    this[Symbol.iterator] = function () {
        var p = this._head;
        var self = this;
        var i = 0;
        var x;
        return {
            next: function () {
                if (i < self._size) {
                    x = self._data[p];
                    p = self._nextAdress[p];
                    i += 1;
                    return {
                        done: false,
                        value: x
                    };
                } else {
                    return{
                        done: true
                    };
                }
            }
        };
    };
}