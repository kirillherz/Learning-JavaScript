describe("_getEmptyCell", function () {
    it("Создает и получает новую пустую ячейку если в стеке нет свободных", function () {
        this._sizeStack = 0;
        this._data = [];
        this._nextAdress = [];
        this._headStack = null;
        this._data = [];
        assert.equal(_getEmptyCell.call(this), 0);
        assert.equal(this._data[0], null);
        assert.equal(this._nextAdress[0], null);
    });
    it("Получает новую ячейку из списка", function () {
        this._sizeStack = 0;
        this._data = [];
        this._nextAdress = [null, 3, 0, 4, null];

        this._headStack = 2;
        this._data = [];
        assert.equal(_getEmptyCell.call(this), 2);
        assert.equal(this._headStack, 0);
        assert.equal(_getEmptyCell.call(this), 0);
        assert.equal(this._headStack, null);
    });
});