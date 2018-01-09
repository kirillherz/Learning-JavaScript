describe("push", function () {
    var listBuilder = new ListBasedArrayBuilder();
    var list = listBuilder
            .createNewList()
            .buildGetEmptyCellFunction()
            .buildPushFunction()
            .getList();
    it("Добавляет элемент в пустой список", function () {
        list.push(0);
        assert.equal(list._head, 0);
        assert.equal(list._tail, 0);
        assert.equal(list._data[list._head], 0);
        assert.equal(list._nextAdress[list._head], null);
    });
    it("Добавляет элемент в непустой список", function () {
        console.log(list);
        list.push(1);
        assert.equal(list._head, 0);
        assert.equal(list._tail, 1);
        assert.equal(list._data[list._tail], 1);
        assert.equal(list._nextAdress[list._tail], null);
    });
    it("Считает размер списка", function () {
        assert.equal(list.getSize(), 2);
    });
});