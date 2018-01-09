function ListBuilder() {
    this._list;
    this.getList = function () {
        return this._list;
    };
    this.createNewList = function () {
        this._list = new ListBasedArray();
    };
}

