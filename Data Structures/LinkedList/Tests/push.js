describe("push", function () {

    it("Добавляет элемент в пустой список", function () {
        var list = {_data: [],
            _nextAdress: [],
            _head: null,
            _tail: null,

            _size: 0,
            _getEmptyCell: function () {
                this._data.push(null);
                this._nextAdress.push(null);
                return 0;
            },
            push: push};
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