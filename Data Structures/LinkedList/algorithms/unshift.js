function unshift(x) {
    var index = this._getEmptyCell();
    this._data[index] = x;
    if (this._size === 0) {
        this._head = index;
        this._tail = index;
        this._nextAdress[index] = null;
    } else {
        this._nextAdress[index] = this._head;
        this._head = index;
    }
    this._size += 1;
}