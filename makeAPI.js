const http = require('http');
const data = require('./data');
 http.createServer((req,resp)=>{
    resp.writeHead(200, {'Content-Type': 'application\json'});
    //resp.write({"name":'swapnali Matele', "emial":'swap@gmail.com'});
    resp.write(JSON.stringify(data));
    resp.end();
 
}).listen(50101);