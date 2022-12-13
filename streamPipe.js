const fs = require('fs');
const http= require('http');
const server= http.createServer()
server.on('request', (req,resp)=>{

    const rstream = fs.createReadStream('input2.txt')
    rstream.pipe(resp);
    resp.end();
    
    });
    server.listen(8010);
