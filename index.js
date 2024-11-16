const http = require('http');
const generator = require('generate-password');

http.createServer((req, res) => {
    const password = generator.generate({
        length: 16,
        numbers: true,
        strict: true,
        symbols: true
    });

    console.log("Generated Password: ", password);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<div><h1> Password: ${password}</h1></div>`);
    res.end();
}).listen(3090, () => { 
    console.log('server is running on port 3090') 
});