// http module....

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`<h1 style='color:red; text-align:center'>Welcome to my Homepage! Hurray</h1>`);
        return res.end()
    }
    if (req.url === '/about') {
        res.end(`<h1 style='color:red; text-align:center'>Hi I'm a Full Stack Developer!</h1>`);
    }

    res.end(`
    <body style='background:black; height:100vh'>
    
    <h1 style='color:red; text-align:center'>OOPS...!!!</h1>
    
    <p style='color:white; text-align:center'>We can't seem to find the page you're searching for...</p>

    <a href='/' style='color:red; text-align:center; display:block'>back home</a>
    
    </body>
    `)

});

server.listen(7000, () => {
    console.log(`server is running on : localhost:7000`);
})
