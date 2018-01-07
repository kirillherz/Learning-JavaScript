describe("push", function () {
    it("Добавляет элемент в пустой список", function () {
        this._nextAdress = [];
        this._data = [];
        this._head = null;
        this._tail = null;
        push.call(this, 0);
        assert.equal(this._head, 0);
        assert.equal(this._tail, 0);
        assert.equal(this._data[this._head], 0);
        assert.equal(this._nextAdress[this._head], null);

    });
    it("Добавляет элемент в непустой список", function () {
        this._nextAdress = [null];
        this._data = [0];
        this._head = 0;
        this._tail = 0;
        push.call(this, 1);
        assert.equal(this._head, 0);
        assert.equal(this._tail, 1);
        assert.equal(this._data[this._tail], 1);
        assert.equal(this._nextAdress[this._tail], null);
    });
});