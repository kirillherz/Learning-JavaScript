describe("push", function () {
    var listBuilder = new ListBasedArrayBuilder();
    var list = listBuilder
            .createNewList()
            .buildGetEmptyCellFunction()
            .buildPushFunction()
            .getList();
    it("Добавляет элемент в пустой список", function () {
        List.call(this);
        this._getEmptyCell = _getEmptyCell;
        push.call(this, 0);
        assert.equal(this._head, 0);
        assert.equal(this._tail, 0);
        assert.equal(this._data[this._head], 0);
        assert.equal(this._nextAdress[this._head], null);

    });
    it("Добавляет элемент в непустой список", function () {
        var listBuilder = new ListBasedArrayBuilderTestPush();
        var list = listBuilder
                .createNewList()
                .buildGetEmptyCellFunction()
                .buildPushFunction()
                .getList();
        list.push(1);
        assert.equal(list._head, 0);
        assert.equal(list._tail, 1);
        assert.equal(list._data[list._tail], 1);
        assert.equal(list._nextAdress[list._tail], null);
    });
    it("Считает размер списка", function () {
        List.call(this);
        this._getEmptyCell = _getEmptyCell;
        push.call(this, 0);
        push.call(this, 1);
        assert.equal(this._size, 2);

    });
});