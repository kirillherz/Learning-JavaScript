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
function reverse(arr) {
    for (var l = 0, r = arr.length - 1; l < r; l++, r--) {
        var temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }
}
Array.prototype.reverse = reverse;
