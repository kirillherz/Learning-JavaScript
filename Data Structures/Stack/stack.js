function Stack() {
    var _size = 0;
    var _head = null;
    function _Node() {
        this.data = null;
        this.next = null;
    }
    this.push = function (data) {
       if (_size == 0 ){
           _head = new _Node();
           _head.data = data;
           _size += 1;
       }else{
           var temp = _head;
           _head = new _Node();
           _head.data = data;
           _head.next = temp;
           _size += 1;
       }
    };
}