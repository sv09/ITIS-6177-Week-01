var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
});

server.listen(3000, '127.0.0.1');    //listen at local IP address at port 3000
console.log('listening at port 3000');
