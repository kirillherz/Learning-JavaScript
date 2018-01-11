describe("pop", function () {
    it("Возвращает и удаляет последний элемент из списка", function () {
        var list = {_data: [0, null, 1, null, 2, 3, 4],
            _nextAdress: [2, null, 4, null, 5, 6, null],
            _head: 0,
            _tail: 6,
            _size: 5,
            _deleteItem: function (index) {},
            pop: pop};
        var index = 4;
        while (list._size > 0) {
            assert.equal(list.pop(), index, "Возвращаемый элемент не соответствует ожидаемому");
            index -= 1;
        }
        assert.equal(list._head,null, "При пустом списке указатель head не равен null");
        assert.equal(list._tail,null, "При пустом списке указатель tail не равен null");

    });
    it("Учитывает размер списка", function () {
        var list = {_data: [0, null, 1, null, 2, 3, 4],
            _nextAdress: [2, null, 4, null, 5, 6, null],
            _head: 0,
            _tail: 6,
            _size: 5,
            _deleteItem: function (index) {},
            pop: pop};
        var index = 4;
        while (list._size > 0) {
            list.pop();
            index -= 1;
            assert.equal(list._size, index + 1, "Размер списка не соответствует действительности");
        }
    });
}
);