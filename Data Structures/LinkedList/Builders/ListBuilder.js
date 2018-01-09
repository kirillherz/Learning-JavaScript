function ListBuilder() {
    this._list;
    this.getList = function () {
        return this._list;
    };
    this.createNewList = function () {
        this._list = new ListBasedArray();
    };
}

function ListBasedArrayBuilderTestPush() {
    ListBuilder.call(this);
    var ParentCreateNewList = this.createNewList;

    this.createNewList = function () {
        ParentCreateNewList.call(this);
        this._list._nextAdress = [null];
        this._list._data = [0];
        this._list._head = 0;
        this._list._tail = 0;
        this._list._size = 1;
        return this;
    };

    this.buildGetEmptyCellFunction = function () {
        this._list.setGetEmptyCell(_getEmptyCell);
        return this;
    };
    this.buildPushFunction = function () {
        this._list.setPush(push);
        return this;
    };
}
