describe("push", function () {

    it("Считает размер списка", function () {
        var l = new XorList();
        l.push(0);
        l.push(1);
        l.push(2);
        l.push(3);
        l.push(2);
        assert.equal(l.getSize(), 5);
    });
    it("Правильно считает адреса", function () {
        var l = new XorList();
        l.push(0);
        l.push(1);
        l.push(2);
        l.push(3);
        l.push(4);
        var iterator = l.getAdressIterator();
        assert.equal(iterator.next().value, -2);
        assert.equal(iterator.next().value, 2);
        assert.equal(iterator.next().value, 2);
        assert.equal(iterator.next().value, 6);
        assert.equal(iterator.next().value, -4);
    });
    it("Правильно сохраняет элементы", function () {
        var l = new XorList();
        l.push(0);
        l.push(1);
        l.push(2);
        l.push(3);
        l.push(4);
        var iterator = l[Symbol.iterator]();
        assert.equal(iterator.next().value, 0);
        assert.equal(iterator.next().value, 1);
        assert.equal(iterator.next().value, 2);
        assert.equal(iterator.next().value, 3);
        assert.equal(iterator.next().value, 4);
    });

});