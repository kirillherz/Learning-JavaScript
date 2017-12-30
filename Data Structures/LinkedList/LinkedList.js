function List() {
    var _size = 0;
    var _items = [];
    var _stack = new Stack();
    var _head = null;
    this.push = function (x) {
        if (_size == 0) {
            _items.push([x, null]);
            _size += 1;
            _head = 0;
        } else {
            if (_stack.getSize() == 0) {
                _items.push([x, _head]);
                _head = _items.length - 1;
                _size += 1;
            } else {
                var temp = _stack.pop();
                _items[_head][1] = temp;
                _head = temp;
                _items[_head][0] = x;
                _items[_head][1] = null;
                _size += 1;
            }
        }
    };
    this.pop = function () {
        var x = _items[_head][0];
        _head = _items[_head][1];
        _size -= 1;
        return x;
    };
}