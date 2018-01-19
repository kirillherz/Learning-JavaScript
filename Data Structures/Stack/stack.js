function Stack() {
    var _size = 0;
    var _head = null;
    function _Node() {
        this.data = null;
        this.next = null;
    }
    this.push = function (data) {
        if (_size === 0) {
            _head = new _Node();
            _head.data = data;
            _size += 1;
        } else {
            var temp = _head;
            _head = new _Node();
            _head.data = data;
            _head.next = temp;
            _size += 1;
        }
    };
    this.pop = function () {
        if (_size !== 0) {
            var x = _head.data;
            _head = _head.next;
            _size -= 1;
            return x;
        } else {
            return null;
        }
    };
    this.getSize = function () {
        return _size;
    };
}