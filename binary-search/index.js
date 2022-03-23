// Loop
function binarySearch(arr, x) {
    let lo = 0;
    let hi = array.length - 1;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return -1;
}

// Recursive
function binarySearch1(arr, l, r, x) {

	if (l <= r) {
		mid = l + Math.floor((r - l) / 2);
	
		if (arr[mid] == x)
			return mid;
	
		if (arr[mid] > x)
			return binarySearch1(arr, l, mid - 1, x);
	
		return binarySearch1(arr, mid + 1, r, x);
	}
	return -1;
}

const result = binarySearch([2, 3, 4, 10, 40], 10);
(result == -1) ? console.log("Phần tử không tồn tại trong mảng")
    : console.log("Phần tử có vị trí index " + result);

// let arr = [40, 3, 4, 10, 2];
// let x = 10;
// let n = arr.length;

// const result1 = binarySearch1(arr, 0, n - 1 , x);
// (result1 == -1) ? console.log("Phần tử không tồn tại trong mảng")
//     : console.log("Phần tử có vị trí index " + result1);