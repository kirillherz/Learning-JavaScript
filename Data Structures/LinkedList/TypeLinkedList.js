var ListBasedArray = /** @class */ (function () {
    function ListBasedArray(parameters) {
    }
    //Алгоритмы
    ListBasedArray.prototype.getSize = function () {
        return this._size;
    };
    ListBasedArray.prototype._getEmptyCell = function () {
        var index;
        if (this._headStack === null) {
            this._data.push(null);
            this._nextAdress.push(null);
            index = this._data.length - 1;
        }
        else {
            index = this._headStack;
            this._headStack = this._nextAdress[this._headStack];
        }
        return index;
    };
    ListBasedArray.prototype._deleteItem = function (index) {
        var x;
        if (index === 0) {
            x = this.shift();
        }
        else if (index !== (this._size - 1)) {
            var pHead = this._head;
            var pPrev = null;
            var count = 0;
            while (count !== index) {
                pPrev = pHead;
                pHead = this._nextAdress[pHead];
                count += 1;
            }
            x = this._data[pHead];
            this._nextAdress[pPrev] = this._nextAdress[pHead];
            this._size -= 1;
        }
        else {
            x = this.pop();
        }
        return x;
    };
    ListBasedArray.prototype.push = function (x) {
        var index;
        if (this._size === 0) {
            index = this._getEmptyCell();
            this._head = index;
            this._tail = index;
            this._data[index] = x;
            this._nextAdress[index] = null;
        }
        else {
            index = this._getEmptyCell();
            this._nextAdress[this._tail] = index;
            this._tail = index;
            this._nextAdress[index] = null;
            this._data[index] = x;
        }
        this._size += 1;
    };
    ListBasedArray.prototype.pop = function () {
        var x;
        if (this._size === 1) {
            x = this._data[this._head];
            this._deleteItem(this._head);
            this._head = null;
            this._tail = null;
            this._size -= 1;
        }
        else {
            var pHead = this._head;
            var pPrev = null;
            while (this._nextAdress[pHead] !== null) {
                pPrev = pHead;
                pHead = this._nextAdress[pHead];
            }
            x = this._data[pHead];
            this._nextAdress[pPrev] = null;
            this._deleteItem(pHead);
            this._size -= 1;
            this._tail = pPrev;
        }
        return x;
    };
    ListBasedArray.prototype.insert = function (index, x) {
        if (index === 0) {
            this.unshift(x);
        }
        else if (index === this._size) {
            this.push(x);
        }
        else {
            var pHead = this._head;
            var pPrev = null;
            var count = 0;
            while (count !== index) {
                pPrev = pHead;
                pHead = this._nextAdress[pHead];
                count += 1;
            }
            var newNode = this._getEmptyCell();
            this._nextAdress[pPrev] = newNode;
            this._data[newNode] = x;
            this._nextAdress[newNode] = pHead;
        }
    };
    ListBasedArray.prototype["delete"] = function (index) {
        var x;
        if (index === 0) {
            x = this.shift();
        }
        else if (index !== (this._size - 1)) {
            var pHead = this._head;
            var pPrev = null;
            var count = 0;
            while (count !== index) {
                pPrev = pHead;
                pHead = this._nextAdress[pHead];
                count += 1;
            }
            x = this._data[pHead];
            this._nextAdress[pPrev] = this._nextAdress[pHead];
            this._size -= 1;
        }
        else {
            x = this.pop();
        }
        return x;
    };
    ListBasedArray.prototype.unshift = function (x) {
        var index = this._getEmptyCell();
        this._data[index] = x;
        if (this._size === 0) {
            this._head = index;
            this._tail = index;
            this._nextAdress[index] = null;
        }
        else {
            this._nextAdress[index] = this._head;
            this._head = index;
        }
        this._size += 1;
    };
    ListBasedArray.prototype.shift = function () {
        var x = this._data[this._head];
        var temp = this._head;
        this._deleteItem(this._head);
        this._head = this._nextAdress[temp];
        if (this._head === null) {
            this._tail = null;
        }
        this._size -= 1;
        return x;
    };
    return ListBasedArray;
}());
