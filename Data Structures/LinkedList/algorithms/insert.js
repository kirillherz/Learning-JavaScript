function insert(index, x) {
    if (index === 0) {
        this.unshift(x);
    } else if (index === this._size) {
        this.push(x);
    } else {
        var pHead = this._head;
        var pPrev = null;
        var count = 0;
        while (count !== index) {
            pPrev = pHead;
            pHead = this._nextAdress[pHead];
            count += 1;
        }
        var newNode = this._getEmptyCell();
        this._nextAdress[pPrev] = newNode;
        this._data[newNode] = x;
        this._nextAdress[newNode] = pHead;

    }
}