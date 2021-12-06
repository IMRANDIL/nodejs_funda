const http = require('http');

const server = http.createServer();

//emits request event...

//subscribe to it /listen for it /respond it...

server.on('request', (req, res) => {
    res.end('Welcome Folks!')
});

server.listen(8000);