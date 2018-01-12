function pop() {
    var x;
    if (this._size === 1) {
        x = this._data[this._head];
        this._deleteItem(this._head);
        this._head = null;
        this._tail = null;
        this._size -= 1;
    } else {
        var pHead = this._head;
        var pPrev = null;
        while (this._nextAdress[pHead] !== null) {
            pPrev = pHead;
            pHead = this._nextAdress[pHead];
        }
        var x = this._data[pHead];
        this._nextAdress[pPrev] = null;
        this._deleteItem(pHead);
        this._size -= 1;
        this._tail = pPrev;
    }
    return x;
}