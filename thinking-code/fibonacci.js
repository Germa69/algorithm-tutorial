// 

const app = {

    // Complexity: O (n) --> Loop 
    fibonacci(n) {
        let a = 1, b = 0, temp;

        while (n >= 0) {
            temp = a;
            a = a + b;
            b = temp;
            n--;
        }

        return b;
    },

    // Complexity: O (2 ^ N) --> Recursive
    fibonacci1(n) {
        if (n <= 1) {
            return 1;
        }

        return app.fibonacci1(n - 1) + app.fibonacci1(n - 2);
    },
    

    // Complexity: O (2N) -> Memoization
    fibonacci2(n, memo) {
        memo = memo || {};

        if (memo[n]) {
            return memo[n];
        }

        if (n <= 1) {
            return 1;
        }

        return memo[n] = app.fibonacci2(n - 1) + app.fibonacci2(n - 2);
    } 

}

const result = app.fibonacci(5);
console.log(result);

const result1 = app.fibonacci1(6);
console.log(result1);

const result2 = app.fibonacci2(6, {})
console.log(result2);
