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
    var _deleteItem = function (index) {
        if (index === _items.length - 1) {
            _items.pop();
        } else {
            _items[index][DATA] = null;
            _items[index][NEXT] = null;
            _stack.push(index);
        }
    }
    this.push = function (x) {
        var temp = _head;
        _head = _getEmptyCell();
        _items[_head][NEXT] = temp;
        _items[_head][DATA] = x;
        _size += 1;
    };
    this.pop = function () {
        var x = _items[_head][DATA];
        var tempHead = _head;
        _head = _items[_head][NEXT];
        _deleteItem(tempHead);
        _size -= 1;
        return x;
    };
    this.unshift = function (x) {
        var _temp = _head;
        while (_items[_temp][NEXT] !== null) {
            _temp = _items[_temp][NEXT];
        }
        var index = _getEmptyCell();
        _items[index][DATA] = x;
        _items[index][NEXT] = null;
        _items[_temp][NEXT] = index;
        _size += 1;

    };
}
