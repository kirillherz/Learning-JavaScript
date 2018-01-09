describe('_deleteItem', function () {
    it('добавляет элемент в стэк свободных ячееек ', function () {
        this._sizeStack = 0;
        this._data = [0, 1, 2, 3, 4];
        this._nextAdress = [1, 2, 3, 4, null];
        this._headStack = null;
        _deleteItem.call(this, 2);
        assert.equal(this._headStack, 2);
        assert.equal(this._nextAdress[this._headStack], null);
        _deleteItem.call(this, 0);
        assert.equal(this._headStack, 0);
        assert.equal(this._nextAdress[this._headStack], 2);
    });
    it('Уменьшает массив data если удаляемый индекс попадает на последний элемент ', function () {

        this._data = [0, 1, 2, 3, 4];
        this._nextAdress = [2, 2, null, 4, null];
        this._headStack = 0;


        _deleteItem.call(this, 4);
        assert.equal(this._headStack, 0);
        assert.equal(this._nextAdress[this._headStack], 2);
        assert.equal(this._nextAdress.length, 4);
        assert.equal(this._data.length, 4);
    });
});