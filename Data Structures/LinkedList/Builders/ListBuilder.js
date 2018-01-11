function ListBuilder() {
    this._list;
    this.getList = function () {
        return this._list;
    };
    this.createNewList = function () {
        this._list = new ListBasedArray();
    };
}

function DirectorList() {
    var _listBuilder;
    this.setBuilder = function (builder) {
        _listBuilder = builder;
    };
    this.getList = function () {
        return _listBuilder.getList();
    };
    this.counstructList = function () {
        _listBuilder
                .createNewList()
                .buildGetEmptyCellFunction()
                .buildDeleteItemFuinction()
                .buildPushFunction()
                .buildPopFunction();
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
    this.buildDeleteItemFuinction = function () {
        this._list.setDeleteItem(_deleteItem);
        return this;
    };

    this.buildPushFunction = function () {
        this._list.setPush(push);
        return this;
    };

    this.buildPopFunction = function () {
        this._list.setPop(pop);
        return this;
    }
}
