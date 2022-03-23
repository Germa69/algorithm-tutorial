function filterNumber(arr) {
    const result = arr.filter(val => {
        if (isNaN(val) || isBoolean(val) || isEmptyString(val)) {
            return false;
        } else {
            return true;
        }
    })

    return result;
}

function isBoolean(val) {
    return typeof val === 'boolean';
}

function isEmptyString(val) {
    return typeof val === 'string' && val.trim().length === 0; 
}

const result = filterNumber([1, "2", " ", NaN, Number.POSITIVE_INFINITY, 66, "ab1", false])
console.log(result);