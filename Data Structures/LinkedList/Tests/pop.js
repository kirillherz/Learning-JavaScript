describe("pop", function () {
    it("Возвращает и удаляет последний элемент из списка", function () {
        var list = {_data: [0, null, 1, null, 2, 3, 4],
            _nextAdress: [2, null, 4, null, 5, 6, null],
            _head: null,
            _tail: 6,
            _size: 4,
            _deleteItem: function (index) {},
            pop: pop};
        var index = 4;
        while (list._size > 0) {
            assert.equal(list.pop(),index );
            index -= 1;
        }
        assert.equal(list._head,null );
        assert.equal(list._tail,null );
    });
}
);