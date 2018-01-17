interface IList {
    getSize(): number;
    push(x: any): void;
    pop(): any;
    insert(index: number, x: any): void;
    delete(index: number): void;
    unshift(x: number): void;
    shift(): number;
}

interface IStack {
    getSize(): number;
    push(x: any): void;
    pop(): any;
}

class ListBasedArray implements IList {
    private _data: number[];
    private _nextAdress: number[];
    private _head: number;
    private _tail: number;
    private _headStack: number;
    private _size: number;

    //Алгоритмы
    getSize(): number {
        return this._size;
    }
    private _getEmptyCell(): number {
        let index: number;
        if (this._headStack === null) {
            this._data.push(null);
            this._nextAdress.push(null);
            index = this._data.length - 1;
        } else {
            index = this._headStack;
            this._headStack = this._nextAdress[this._headStack];
        }
        return index;
    }
    private _deleteItem(index: number) {
        let x: number;
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
    push(x: any): void {
        let index: number;
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
    pop(): number {
        let x: number;
        if (this._size === 1) {
            x = this._data[this._head];
            this._deleteItem(this._head);
            this._head = null;
            this._tail = null;
            this._size -= 1;
        } else {
            let pHead: number = this._head;
            let pPrev: number = null;
            while (this._nextAdress[pHead] !== null) {
                pPrev = pHead;
                pHead = this._nextAdress[pHead];
            }
            x = this._data[pHead];
            this._nextAdress[pPrev] = null;
            this._deleteItem(pHead);
            this._size -= 1;
            this._tail = pPrev;
        }
        return x;
    }
    insert(index: number, x: any): void {
        if (index === 0) {
            this.unshift(x);
        } else if (index === this._size) {
            this.push(x);
        } else {
            let pHead: number = this._head;
            let pPrev: number = null;
            let count: number = 0;
            while (count !== index) {
                pPrev = pHead;
                pHead = this._nextAdress[pHead];
                count += 1;
            }
            let newNode = this._getEmptyCell();
            this._nextAdress[pPrev] = newNode;
            this._data[newNode] = x;
            this._nextAdress[newNode] = pHead;

        }
    }
    delete(index: number): number {
        let x: number;
        if (index === 0) {
            x = this.shift();
        } else if (index !== (this._size - 1)) {
            let pHead = this._head;
            let pPrev = null;
            let count = 0;
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
    unshift(x: number): void {
        let index: number = this._getEmptyCell();
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
    shift(): number {
        let x: number = this._data[this._head];
        let temp: number = this._head;
        this._deleteItem(this._head);
        this._head = this._nextAdress[temp];
        if (this._head === null) {
            this._tail = null;
        }
        this._size -= 1;
        return x;
    }
    constructor(parameters) {

    }
}

