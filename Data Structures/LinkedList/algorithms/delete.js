function deleteItem(index) {
    var x;
    if (index === 0) {
        x = this.shift();
    } else if (index !== (this._size - 1)) {
        var pHead = this._head;
        var pPrev = null;
        var count = 0;
        while (count !== index) {
            pPrev = pHead;
            pHead = this._nextAdress[pHead];
            count += 1;
        }
        x = this._data[pHead];
        this._nextAdress[pPrev] = this._nextAdress[pHead];
        this._size -= 1;
    } else {
        x = this.pop();
    }
    return x;
}