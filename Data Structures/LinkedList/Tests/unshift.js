describe("unshift", function () {
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
            unsfit: unshift};
        list.unsfit(0);
        assert.equal(list._data[0], 0, "Неверно добавляет значение");
        assert.equal(list._head, 0, "head не указывает на голову");
        assert.equal(list._tail, 0, "tail не указывает на хвост");
        assert.equal(list._nextAdress[0], null, "Следующий адрес не равен null");
    });
    it("Добавляет элемент в начало в непустом списке", function () {
        var list = {_data: [0],
            _nextAdress: [null],
            _head: 0,
            _tail: 0,
            _size: 1,
            _getEmptyCell: function () {
                this._data.push(null);
                this._nextAdress.push(null);
                return 1;
            },
            unsfit: unshift};
        list.unsfit(1);
        assert.equal(list._data[1], 1, "Неверно добавляет значение");
        assert.equal(list._head, 1, "head не указывает на голову");
        assert.equal(list._tail, 0, "tail не указывает на хвост");
        assert.equal(list._nextAdress[0], null, "Следующий адрес не равен null");
    });
    it("Считает размер списка", function () {
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
            unsfit: unshift};
        list.unsfit(0);
        list.unsfit(1);
        
        assert.equal(list._size, 2, "Не правильно считает размер списка");
    });
});