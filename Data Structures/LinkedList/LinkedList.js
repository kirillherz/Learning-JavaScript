function List() {
    this._size = 0;

    //Алгоритмы
    this._pushFunction;
    this._popFunction;
    this._insertFunction;
    this._deleteItemFunction;
    this._unshiftFunction;

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

    this._getEmptyCell = function () {
        return this._getEmptyCellFunction();
    };
    this._deleteItem = function (index) {
        this._deleteItemFunction(index);
    };
    this[Symbol.iterator] = function () {
        var p = this._head;
        var size = this._size;
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

function _deleteItem(index) {
    if (index === this._data.length - 1) {
        this._data.pop();
        this._nextAdress.pop();
    } else {
        if (this._headStack === null) {
            this._headStack = index;
            this._nextAdress[this._headStack] = null;
        } else {
            this._nextAdress[index] = this._headStack;
            this._headStack = index;
        }
    }
}

function push(x) {
    var index;
    if (this._size === 0) {
        index = this._getEmptyCell();
        this._head = index;
        this._tail = index;
        this._data[index] = x;
        this._nextAdress[index] = null;
    } else {
        index = this._getEmptyCell();
        this._nextAdress[this._tail] = index;
        this._tail = index;
        this._nextAdress[index] = null;
        this._data[index] = x;
    }
    this._size += 1;
}

function pop() {

}
