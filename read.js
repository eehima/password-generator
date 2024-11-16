const fs = require('fs');

// const data =fs.readFileSync('input.txt');

// console.log(data.toString());

// console.log("Program Ended");

// asynchronous operation

fs.readFile('input.txt', (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Program Ended");
console.log("Ephraim is getting there");