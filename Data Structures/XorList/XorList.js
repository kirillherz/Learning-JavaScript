function XorList() {
    var _items = [];
    var _size = 0;
    var _head = null;
    var _tail = null;
    var NULL = -1;
    var DATA = 0;
    var ADRESS = 1;
    var _stack = [];
    var _getEmptyCell = function () {
        var index;
        if (_stack.length === 0) {
            _items.push([null, null]);
            index = _items.length - 1;
        } else {
            index = _stack.pop();
        }
        return index;
    };
    this.getSize = function () {
        return _size;
    };
    var _firstAddition = function (x) {
        var index = _getEmptyCell();
        _items[index][DATA] = x;
        _items[index][ADRESS] = NULL ^ NULL;
        _head = index;
        _tail = index;
        _size += 1;
    };
    this.push = function (x) {
        if (_size === 0) {
            _firstAddition(x);
        } else {
            var index = _getEmptyCell();
            var prev = _items[_tail][ADRESS] ^ NULL;
            _items[_tail][ADRESS] = prev ^ index;
            _items[index][ADRESS] = _tail ^ NULL;
            _items[index][DATA] = x;
            _tail = index;
            _size += 1;
        }
    };
    this.unshift = function (x) {
        if (_size === 0) {
            _firstAddition(x);
        } else {
            var index = _getEmptyCell();
            var next = _items[_head][ADRESS] ^ NULL;
            _items[_head][ADRESS] = next ^ index;
            _items[index][ADRESS] = _head ^ NULL;
            _items[index][DATA] = x;
            _head = index;
            _size + 1;
        }
    };
    this.pop = function () {
        if (_size === 1) {
            var x = _items[_tail][DATA];
            _stack.push(_tail);
        } else {
            var x = _items[_tail][DATA];
            var prev = _items[_tail][ADRESS] ^ NULL;
            var prevPrev = _tail ^ _items[prev][ADRESS];
            _stack.push(_tail);
            _tail = prev;
            _items[_tail][ADRESS] = prevPrev ^ NULL;

        }
        _size -= 1;
        return x;
    };
    this.insert = function (index, x) {
        if (index === 0) {
            this.unshift(x);
        } else if (index === _items.length - 1) {
            this.push(x);
        } else {
            var p = _head;
            var prev = NULL;
            var temp;
            for (var c = 0; c !== index; c++) {
                temp = p;
                p = _items[p][ADRESS] ^ prev;
                prev = temp;
            }
            var prevPrev = _items[prev][ADRESS] ^ p;
            var next = _items[p][ADRESS] ^ prev;
            var newItemIndex = _getEmptyCell();
            _items[prev][ADRESS] = prevPrev ^ newItemIndex;
            _items[newItemIndex][ADRESS] = prev ^ p;
            _items[newItemIndex][DATA] = x;
            _items[p][ADRESS] = newItemIndex ^ next;
            _size += 1;
        }
    };
    this.shift = function () {
        if (_size === 1) {
            var x = _items[_head][DATA];
            _stack.push(_head);
        } else {
            var x = _items[_head][DATA];
            var next = _items[_head][ADRESS] ^ NULL;
            var nextNext = _head ^ _items[next][ADRESS];
            _stack.push(_head);
            _head = next;
            _items[_head][ADRESS] = nextNext ^ NULL;
        }
        _size -= 1;
        return x;
    };
    this.getAdressIterator = function () {
        var p = _head;
        var prev = NULL;
        var temp;
        var i = 0;
        return {
            [Symbol.iterator] () {
                return this;
            },
            next: function () {
                if (i < _size) {
                    var x = _items[p][ADRESS];
                    temp = p;
                    p = prev ^ _items[p][ADRESS];
                    prev = temp;
                    i++;
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
    this[Symbol.iterator] = function () {
        var p = _head;
        var prev = NULL;
        var temp;
        var i = 0;
        return {
            next: function () {
                if (i < _size) {
                    var x = _items[p][DATA];
                    temp = p;
                    p = prev ^ _items[p][ADRESS];
                    prev = temp;
                    i++;
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