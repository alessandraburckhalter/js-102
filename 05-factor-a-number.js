//Task: Write a function factors which is given a number and returns an array containing all its factors

function factorNum(a) {
    let counter = 1
    if (a === 0) {
        return 0;
    } 
    while (counter <= a) {
        if (a % counter === 0) {
            console.log(counter);
        }
        counter++
    } 
}

factorNum(120);
factorNum(15);
factorNum(90);