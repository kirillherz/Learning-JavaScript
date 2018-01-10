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
            push: push};
        list.push(1);
        assert.equal(list._head, 0);
        assert.equal(list._tail, 1);
        assert.equal(list._data[list._tail], 1);
        assert.equal(list._nextAdress[list._tail], null);
    });
    it("Считает размер списка", function () {
        var list = {_data: [],
            _nextAdress: [],
            _head: null,
            _tail: null,

            _size: 0,
            _countCallGetEmptyCell: 0,
            _getEmptyCell: function () {
                this._data.push(null);
                this._nextAdress.push(null);
                this._countCallGetEmptyCell += 1;
                return this._countCallGetEmptyCell - 1;
            },
            push: push};
        list.push(0);
        list.push(1);
        list.push(2);
        assert.equal(list._size, 3);
    });
});