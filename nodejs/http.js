const http=require('http');
var server=http.createServer(function(req,res){
    switch(req.url){
       case '/1.jpg':
       res.write('1.jpg');
       break;
       case '/1.html':
       res.write('1.html');
       break;
       default:
       res.write('1.js');
    }
    res.end();
});

server.listen(8080);
