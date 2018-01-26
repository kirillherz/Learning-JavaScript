function Form(name) {
    this._form = document.getElementsByName(name)[0];
    for (var i = 0; i !== this._form.length; i++) {
        (function (j) {
            Object.defineProperty(this, this._form[j].name, {
                get: function () {
                    return this._form[j].value;
                },
                set: function (value) {
                    this._form[j].value = value;
                }
            });
        }).call(this, i);
    }
}
function Column(text) {
    this.tdElement = document.createElement("td");
    this.tdElement.innerHTML = text;
    this.setText = function (text) {
        tdElement.innerHTML = text;
    };
}
function Row() {
    this.trElement = document.createElement("tr");
    this.addCol = function (column) {
        this.trElement.appendChild(column.tdElement);
        return this;
    };
}

function Table(id) {
    var table = document.getElementById(id);
    this.rowArray = [];
    this.addRow = function (row) {
        table.insertBefore(row.trElement, table.lastChild);
        this.rowArray.push(row.trElement);
        return this;
    };
}
function deleteRow(self) {
    var row = self.parentElement.parentElement;
    row.parentElement.removeChild(row);
}
function addTableRow() {
    var t = new Table("table");
    var name = document.getElementsByName("name")[0].value;
    var family = document.getElementsByName("family")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var row = new Row()
            .addCol(new Column(name))
            .addCol(new Column(family))
            .addCol(new Column(age))
            .addCol(new Column('<input type="submit" onclick="deleteRow(this);" name="submit" value="удалить"/>'));
    t.addRow(row);
}
