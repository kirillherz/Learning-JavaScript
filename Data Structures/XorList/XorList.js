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
    var _FirstAddition = function (x) {
        var index = _getEmptyCell();
        _items[index][DATA] = x;
        _items[index][ADRESS] = NULL ^ NULL;
        _head = index;
        _tail = index;
        _size += 1;

    }
    this.push = function (x) {
        if (_size === 0) {
            _FirstAddition();
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
        var index = _getEmptyCell();
        if (_size === 0) {
            _items[index][DATA] = x;
            _items[index][ADRESS] = NULL ^ NULL;
            _head = index;
            _tail = index;
        } else {
            var next = _items[_head][ADRESS] ^ NULL;
            _items[_head][ADRESS] = next ^ index;
            _items[index][ADRESS] = _head ^ NULL;
            _items[index][DATA] = x;
            _head = index;
        }
        _size + 1;
    }
}