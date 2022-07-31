// Http

const http = require('http');

const server = http.createServer((req, res) => { //req is the request that we listen to. listening to an incoming request while res is the response that we are sending back
    // res.write('Welcome to our home page in view');
    // res.end(); // You can save a bit of line code by just using the res.end() method rather

    if (req.url === '/') {
        return res.end('Welcome To The Home Page')
    }
    if (req.url === '/about') {
        return res.end('Welcome to the About Page')
    }
    return res.end(`
        <h1>Ooops</h1>
        <p>Sorry the page you are looking for is not found</p>
    `)
});

server.listen(5000); // what port is the server listening on