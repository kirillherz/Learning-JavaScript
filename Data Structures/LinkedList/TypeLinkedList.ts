interface IList {
    getSize(): number;
    push(x: any): void;
    pop(): any;
    insert(index: number, x: any): void;
    delete(index: number): void;
    unshift(x: number): void;
    shift(): number;
}

