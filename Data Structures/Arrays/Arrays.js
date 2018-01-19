function join(del) {
    if (!(typeof (del) === "string")) {
        del = ",";
    }
    var str = "";
    for (var i = 0; i !== this.length; i++) {
        if (this[i]) {
            str += this[i].toString();
        }
        if (i !== this.length - 1) {
            str += del;
        }
    }
    return str;
}
Array.prototype.join = join;
