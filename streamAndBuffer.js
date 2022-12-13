// Handle stream events -> data, end and error

const fs = require('fs');
const http= require('http');
const server= http.createServer();

server.on('request', (req,resp)=>{
    //var fs = require('fs');
    // read data by using fs module readfile concept

    fs.readFileSync('input.txt', (err, data)=>{

        if(err) return console.errors(err);
server.listen(5500)
resp.write(data.toString())
        resp.end();
    });


    // read data by using creatReadStream
    const rstream = fs.createReadStream('input2.txt')
    rstream.on('data',(chunkdata)=>{
        resp.write(chunkdata);
    });
    rstream.on('end',()=>{
        resp.end();
    });
    rstream.on('errors',(err)=>{
        console.log(err);   
        resp.end('file not found');
    });


});


server.listen(5050)