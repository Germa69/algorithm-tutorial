function luckyseven(arr) {
	if (arr.length < 3) {
		return 'Not possible'
	} else {
		for (let i = 2; i < arr.length; i++) {
			if (arr[i] + arr[i - 1] + arr[i - 2]  === 7) {
				return true;
			}
		}
		
		return false;
	}
} 

const result = luckyseven([2, 1, 4]);
console.log(result);