describe("insert", function () {s
    it("Считает размер списка", function () {
        var l = new XorList();
        l.insert(0, 0);
        l.insert(1, 1);
        l.insert(2, 2);
        assert.equal(l.getSize(), 3);
    });
});