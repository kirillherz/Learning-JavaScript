function List() {
    var _size = 0;
    var _items = [];
    var _stack = new Stack();
    var _head = null;
    var DATA = 0;
    var NEXT = 1;
    var _getEmptyCell = function () {
        var index;
        if (_stack.getSize() == 0) {
            _items.push([null, null]);
            index = _items.length - 1;
        } else {
            index = _stack.pop();
        }
        return index;
    };
    this.push = function (x) {
        if (_size == 0) {
            _items.push([x, null]);
            _head = 0;
        } else {
            var temp = _getEmptyCell();
            _items[_head][NEXT] = temp;
            _head = temp;
            _items[_head][DATA] = x;
            _items[_head][NEXT] = null;
        }
        _size += 1;
    };
    this.pop = function () {
        var x = _items[_head][DATA];
        var tempHead = _head;
        _head = _items[_head][NEXT];
        if (tempHead == _items.length - 1) {
            _items.pop();
        } else {
            _items[tempHead][null];
            _items[tempHead][null];
            _stack.push(tempHead);
        }
        _size -= 1;
        return x;
    };
    this.unshift = function (x) {
        var _temp = _head;
        while (_items[_temp][NEXT] != null) {
            _temp = _items[_temp][NEXT];
        }
        var index = _getEmptyCell();
        _items[index][DATA] = x;
        _items[index][NEXT] = null;
        _items[_temp][NEXT] = index;

    };
}