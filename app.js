const http = require('http');
const { readFileSync } = require('fs');
const homepage = readFileSync('./navbar-app/index.html');
const stylecss = readFileSync('./navbar-app/styles.css');
const javaScrpt = readFileSync('./navbar-app/browser-app.js');
const logosvg = readFileSync('./navbar-app/logo.svg');




const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    //home page..
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });

        return res.end(homepage)
    }

    //about page...
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(`<h1>HI I'm ALI</h1>`);
        return res.end()
    }

    // styles...
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(stylecss);
        return res.end()
    }
    // logo...
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' });
        res.write(logosvg);
        return res.end()
    }

    // javascrpt...
    else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' });
        res.write(javaScrpt);
        return res.end()
    }


    //error page
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        return res.end(`<h2>OOPS!!! Resource Not Found</h2>`)
    }

});

server.listen(5000, () => {
    console.log(`server running on port: 5000`);
})