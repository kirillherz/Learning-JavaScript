describe("shift", function () {
    it("Удаляет элемент из начала списка", function () {
        var list = {_data: [0, 1, 2, 3, 4],
            _nextAdress: [1, 2, 3, 4, null],
            _head: 0,
            _tail: 4,
            _size: 5,
            _deleteItem: function () {
            },
            shift: shift};

        assert.equal(list.shift(), 0, "Неверно  значение");
        assert.equal(list._head, 1, "head не указывает на голову");
        assert.equal(list._tail, 4, "tail не указывает на хвост");
        assert.equal(list._nextAdress[list._head], 2, "Следующий адрес не равен ожидаемому");
    });
    it("Удаляет элемент из начала списка, если в списке 1 элемент", function () {
        var list = {_data: [0],
            _nextAdress: [null],
            _head: 0,
            _tail: 0,
            _size: 1,
            _deleteItem: function () {
            },
            shift: shift};

        assert.equal(list.shift(), 0, "Неверно добавляет значение");
        assert.equal(list._head, null, "head не указывает на голову");
        assert.equal(list._tail, null, "tail не указывает на хвост");
    });
});