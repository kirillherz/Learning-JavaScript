function List() {
    var _size = 0;
    var _items = [];
    var _stack = null;
    var _head = null;
    var DATA = 0;
    var NEXT = 1;
    var _getEmptyCell = function () {
        var index;
        if (_stack !== null) {
            if (_stack.getSize() === 0) {
                _items.push([null, null]);
                index = _items.length - 1;
            } else {
                index = _stack.pop();
            }
        } else {
            _items.push([null, null]);
            index = _items.length - 1;
        }
        return index;
    };
    var _deleteItem = function (index) {
        if (index === _items.length - 1) {
            _items.pop();
        } else {
            _items[index][DATA] = null;
            _items[index][NEXT] = null;
            if (_stack === null) {
                _stack = new List();
            }
            _stack.push(index);
        }
    };
    this.getSize = function () {
        return _size;
    };
    this.push = function (x) {
        var temp = _head;
        _head = _getEmptyCell();
        _items[_head][NEXT] = temp;
        _items[_head][DATA] = x;
        _size += 1;
    };
    this.pop = function () {
        var x;
        if (_size > 0) {
            x = _items[_head][DATA];
            var tempHead = _head;
            _head = _items[_head][NEXT];
            _deleteItem(tempHead);
            _size -= 1;
        } else {
            x = undefined;
        }
        return x;
    };
    this.insert = function (index, x) {
        var temp = _head;
        var prev;
        var i = _size - 1;
        var isStart = (index === _size) && (index !== 0);
        var isMiddle = (_head !== null) && (index !== _head);
        if (isStart) {
            this.unshift(x);
        } else {
            if (isMiddle) {
                while (i !== index) {
                    prev = temp;
                    temp = _items[temp][NEXT];
                    i -= 1;
                    if (i < 0)
                        return undefined;
                }
                var cell = _getEmptyCell();
                _items[cell][DATA] = x;
                _items[cell][NEXT] = temp;
                _items[prev][NEXT] = cell;
                _size += 1;
            } else {
                this.push(x);
            }
        }
    };
    this.delete = function (index) {
        var temp = _head;
        var prev;
        var i = _size - 1;
        var x;
        if (index !== _head) {
            while (i !== index) {
                prev = temp;
                temp = _items[temp][NEXT];
                i -= 1;
                if (i < 0)
                    return undefined;
            }
            _items[prev][NEXT] = _items[temp][NEXT];
            x = _items[temp][DATA];
            _deleteItem(temp);
        } else {
            x = this.pop();
        }
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
