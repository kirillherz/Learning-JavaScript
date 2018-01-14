describe("delete", function () {
    it("Удаляет элемент из начала списка", function () {
        var list = {_data: [0, 1, 2, 3, 4],
            _nextAdress: [1, 2, 3, 4, null],
            _head: 0,
            _tail: 4,
            _size: 5,
            shift: function () {
                this._head = 1;
                this._size = 4;
                return 0;
            },
            _deleteItem: function () {
            },
            delete: deleteItem};
        assert.equal(list.delete(0), 0, "Неверно  значение");
        assert.equal(list._head, 1, "head не указывает на голову");
        assert.equal(list._tail, 4, "tail не указывает на хвост");
        assert.equal(list._nextAdress[list._head], 2, "Следующий адрес не равен ожидаемому");
    });
});