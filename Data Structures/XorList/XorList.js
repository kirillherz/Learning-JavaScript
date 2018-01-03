function XorList() {
    var _items = [];
    var _size = 0;
    var _head = null;
    var _tail = null;
    var NULL = -1;
    var DATA = 0;
    var NEXT = 1;
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
    this.push = function (x) {
        var index = _getEmptyCell();
        if (_size === 0) {
            _items[index][DATA] = x;
            _items[index][NEXT] = NULL^NULL;
            _head = index;
            _tail = index;
        } else {
            var prev = _items[_tail][NEXT] ^ NULL;
            _items[_tail][NEXT] = prev ^ index;
            _items[index][NEXT] = _tail ^ NULL;
            _items[index][DATA] = x;
            _tail = index;
        }
        _size += 1;
    };
    this.unshift = function (x) {
        var index = _getEmptyCell();
        if (_size === 0) {
            _items[index][DATA] = x;
            _items[index][NEXT] = NULL ^ NULL;
            _head = index;
            _tail = index;
        }else{
            var next = _items[_head][NEXT] ^ NULL;
            _items[_head][NEXT] = next ^ index;
            _items[index][NEXT] = _head ^ NULL;
            _items[index][DATA] = x;
            _head = index;
        }
        _size +1;
    }
}