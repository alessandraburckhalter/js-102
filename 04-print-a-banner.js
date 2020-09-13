//Task: Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

function printBanner(str) {
    const strLength = str.length;
    const line = "*".repeat(strLength + 4) + "\n";
    const text = `* ${str} *\n`;
    console.log(line + text + line);
}

printBanner('Welcome to DigitalCrafts');
