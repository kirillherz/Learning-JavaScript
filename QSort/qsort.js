function qsort(arr, start, end) {
    var l = start;
    //var r = arr.length - 1;
    var r = end;
    var pivot = arr[Math.floor(Math.random() * (end - start + 1)) + start];
    // var pivot = 5;
    do {
        while ((arr[l] < pivot) && (l != r))
            l++;
        while ((arr[r] > pivot) && (l != r))
            r--;
        if (l != r) {
            var temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }
    } while (l < r);
    if ((end - start) > 1){
        qsort(arr, start, l);
        qsort(arr, r, end);
    }
}