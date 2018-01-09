function ListBuilder() {
    this._list;
    this.getList = function () {
        return this._list;
    };
    this.createNewList = function () {
        this._list = new ListBasedArray();
    };
}

function ListBasedArrayBuilder() {
    ListBuilder.call(this);
    var ParentCreateNewList = this.createNewList;

    this.createNewList = function () {
        ParentCreateNewList.call(this);
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
