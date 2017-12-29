function bsort(arr) {
    for (var end = arr.length - 1; end > 0; end--) {
        for (var i = 0, j = 1; j <= end; i++, j++) {
            if (arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
}