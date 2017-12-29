function partition(arr, start, end) {
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
}
function quickSort(items, left, right) {
    var index = partition(items, left, right);
    if (left < index - 1) {
        quickSort(items, left, index - 1);
    }
    if (index < right) {
        quickSort(items, index, right);
    }

}