const app = {

    // Complexity: O(n)
    linearSearch(arr, x) {
        let i;
        let n = arr.length;

        for (i = 0; i < n; i++) {
            if(arr[i] === x) { 
                return i;
            }
        }

        return -1;
    },

    // Complexity: O(1)
    linearSearch1(arr, x) {
        let n = arr.length;
        let lo = 0;
        let hi = n - 1;
        let pos = -1;

        // Loop lo -> hi
        for (lo; lo <= hi;) {

            // If element found in lo variable
            if (arr[lo] === x) {
                pos = lo;
                console.log("Element found in array " + (pos + 1) + " với vị trí " + (lo + 1));
				break;
            }

            // If element found in hi variable
            if (arr[hi] === x) {
                pos = hi;
                console.log("Element found in array " + (pos + 1) + "với vị trí " + (n - hi))
            }

            lo++;
			hi--;
        }

        // Element not found in array
		if (pos == -1) {
			console.log('Element not found in array!');
		}
    },

    linearSearch2(arr, x) {
		let lo = 0;
		let hi = arr.length-1;
		// Iterate from start till end of list
		while (lo <= hi) {
			// If item was found then return index
			if (arr[lo] === x) {
				return lo;
			} else {
				lo += 1
			}
		}
		// Return -1 to denote the item was not found
		return -1;
	}
}   

console.log(app.linearSearch([1, 2, 3, 4, 5], 5));

app.linearSearch1([1, 2, 3, 4, 5], 5);

console.info("Item was found at index: " + app.linearSearch2([1,3,5,7,9,11,14,18,22], 14));

