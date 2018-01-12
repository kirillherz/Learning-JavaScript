function push(x) {
    var index;
    if (this._size === 0) {
        index = this._getEmptyCell();
        this._head = index;
        this._tail = index;
        this._data[index] = x;
        this._nextAdress[index] = null;
    } else {
        index = this._getEmptyCell();
        this._nextAdress[this._tail] = index;
        this._tail = index;
        this._nextAdress[index] = null;
        this._data[index] = x;
    }
    this._size += 1;
}