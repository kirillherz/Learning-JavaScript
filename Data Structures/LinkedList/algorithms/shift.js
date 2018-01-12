function shift() {
    var x = this._data[this._head];
    var temp = this._head;
    this._deleteItem(this._head);
    this._head = this._nextAdress[temp];
    if (this._head === null) {
        this._tail = null;
    }
    this._size -= 1;
    return x;
}
