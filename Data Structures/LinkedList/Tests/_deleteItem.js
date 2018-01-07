describe('_deleteItem', function () {
    it('добавляет элемент в стэк свободных ячеек и если ячейка была в конце '
            + 'удаляет из основного массива ', function () {
                this._sizeStack = 0;
                this._data = [0, 1, 2, 3, 4];
                this._nextAdress = [1, 2, 3, 4, null];
                this._headStack = null;
                _deleteItem(2);
                assert.equal(this._headStack, 2);
                assert.equal(this._nextAdress[_headStack], null);
                _deleteItem(0);
                assert.equal(this._headStack, 0);
                assert.equal(this._nextAdress[_headStack], 2);
                _deleteItem(4);
                assert.equal(this._headStack, 0);
                assert.equal(this._nextAdress[_headStack], 2);
                assert.equal(this._nextAdress.length, 4);
                assert.equal(this._data.length, 4);

            });
});