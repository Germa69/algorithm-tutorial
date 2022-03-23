var arr = [1, [2, [4, 5]], 6, [7, 8]] 
var result = [];

// C1: ES6
function flattenES6 (arr) {
	console.time('ES6')
	console.log(arr.flat(Infinity));
	console.timeEnd('ES6')
}

flattenES6(arr);

// C2: Recursive
function flattenRecursive (arr) {
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		if (Array.isArray(arr[i])) {
			flattenRecursive(item)
		} else {
			result.push(item);
		}
	}
	
	return result;
}

console.time('Recursive');
console.log(flattenRecursive(arr));
console.timeEnd('Recursive');

// C3: Reduce
function flattenReduce(arr) {
	const result = arr.reduce((acc, cur) => {
		return acc.concat(Array.isArray(cur) ? flattenReduce(cur) : cur)
	}, [])
	
	return result;
}

console.time('Reduce');
console.log(flattenReduce(arr));
console.timeEnd('Reduce');
	






