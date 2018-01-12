function _deleteItem(index) {
    if (index === this._data.length - 1) {
        this._data.pop();
        this._nextAdress.pop();
    } else {
        if (this._headStack === null) {
            this._headStack = index;
            this._nextAdress[this._headStack] = null;
        } else {
            this._nextAdress[index] = this._headStack;
            this._headStack = index;
        }
    }
}