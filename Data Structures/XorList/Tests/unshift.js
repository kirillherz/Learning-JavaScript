describe("unshift", function () {

    it("Считает размер списка", function () {
        var l = new XorList();
        l.unshift(2);
        l.unshift(1);
        l.unshift(0);
        assert.equal(l.getSize(), 3);

    });
    it("Правильно считает адреса", function () {
        var l = new XorList();
        l.unshift(4);
        l.unshift(3);
        l.unshift(2);
        l.unshift(1);
        l.unshift(0);
        var iterator = l.getAdressIterator();
        assert.equal(iterator.next().value, -4);
        assert.equal(iterator.next().value, 6);
        assert.equal(iterator.next().value, 2);
        assert.equal(iterator.next().value, 2);
        assert.equal(iterator.next().value, -2);


    });
    it("Правильно добавляет элементы", function () {
        var l = new XorList();
        l.unshift(4);
        l.unshift(3);
        l.unshift(2);
        l.unshift(1);
        l.unshift(0);
        var iterator = l[Symbol.iterator]();
        assert.equal(iterator.next().value, 0);
        assert.equal(iterator.next().value, 1);
        assert.equal(iterator.next().value, 2);
        assert.equal(iterator.next().value, 3);
        assert.equal(iterator.next().value, 4);


    });
});