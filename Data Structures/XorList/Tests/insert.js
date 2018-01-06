describe("insert", function () {
    it("Считает размер списка", function () {
        var l = new XorList();
        l.insert(0, 0);
        l.insert(1, 1);
        l.insert(2, 2);
        assert.equal(l.getSize(), 3);
    });
    it("Правильно считает адреса", function () {
        var l = new XorList();
        l.insert(0, 0);
        l.insert(1, 1);
        l.insert(2, 2);
        l.insert(3, 3);
        l.insert(4, 4);
        l.insert(2, 2);
        var iterator = l.getAdressIterator();
        assert.equal(iterator.next().value, -2);
        assert.equal(iterator.next().value, 5);
        assert.equal(iterator.next().value, 3);
        assert.equal(iterator.next().value, 6);
        assert.equal(iterator.next().value, 6);
        assert.equal(iterator.next().value, -4);
    });
});