describe("insert", function () {
    it("Добавляет элемент в начало в пустом списке", function () {
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
            insert: insert};
        list.insert(0);
        assert.equal(list._data[0], 0, "Неверно добавляет значение");
        assert.equal(list._head, 0, "head не указывает на голову");
        assert.equal(list._tail, 0, "tail не указывает на хвост");
        assert.equal(list._nextAdress[0], null, "Следующий адрес не равен null");
    });
});