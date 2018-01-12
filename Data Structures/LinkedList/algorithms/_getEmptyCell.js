function _getEmptyCell() {
    var index;
    if (this._headStack === null) {
        this._data.push(null);
        this._nextAdress.push(null);
        index = this._data.length - 1;
    } else {
        index = this._headStack;
        this._headStack = this._nextAdress[this._headStack];
        this._sizeStack -= 1;
    }
    return index;
}