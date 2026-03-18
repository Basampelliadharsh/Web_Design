
function factorialForLoop(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function using a while loop
function factorialWhileLoop(n) {
    let result = 1;
    let i = 1;
    while (i <= n) {
        result *= i;
        i++;
    }
    return result;
}


let number = 5;
console.log("Factorial of " + number + " using for loop: " + factorialForLoop(number));
console.log("Factorial of " + number + " using while loop: " + factorialWhileLoop(number));