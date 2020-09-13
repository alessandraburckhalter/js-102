//Task: Write a function printSquare which is given a size and prints a square of that size using asterisks.

function printSquare(x) {
    const line = "*".repeat(x) + "\n";
    console.log(line.repeat(x));

}

printSquare(5);
printSquare(3);