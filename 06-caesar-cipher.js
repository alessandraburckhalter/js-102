//Task: Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

function cipher(str, offset) {
    let newStr = '';
    let strArr = [...str];
    for (let i = 0; i < str.length; i++) {
        let ordValue = strArr[i].charCodeAt(0);
        // Uppercase
        if ((ordValue >= 65) && (ordValue <= 90)) {
            newStr += String.fromCharCode((((ordValue - 65 + offset) % 26) + 65));
        }
        // Lowercase
        else if ((ordValue >= 97) && (ordValue <= 122)) {
            newStr += String.fromCharCode((((ordValue - 97 + offset) % 26) + 97));
        }
        // Spaces 
        else if (ordValue == 32) {
            newStr += String.fromCharCode(ordValue);
        }
    }
    console.log(newStr);
}

cipher('Genius without education is like silver in the mine', 13);