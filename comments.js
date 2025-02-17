// create web server
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        res.write('This is a comments page');
        res.end();
    }
});
server.listen(3000);
console.log('Listening on port 3000...');