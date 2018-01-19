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
function sort() {
    var partition = function (arr, start, end) {
        var pivot = arr[Math.floor(Math.random() * (end - start + 1)) + start];
        var l = start;
        var r = end;
        while (l <= r) {
            while (arr[l] < pivot)
                l++;
            while (arr[r] > pivot)
                r--;
            if (l <= r) {
                swap(arr, l, r);
                l++;
                r--;
            }
        }
        return l;
    };
    var swap = function (arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    var quickSort = function (items, left, right) {
        var index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    };
    quickSort(this, 0, this.length - 1);
}
Array.prototype.sort = sort;
