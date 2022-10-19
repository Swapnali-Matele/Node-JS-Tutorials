const http = require ('http')

const hostname = "localhost"; 
const port = 3000; 

const server = http.createServer((req,resp)=>{
    console.log(req.headers);
    
});

server.listen(port,hostname,()=>{
    console.log(`serverrunning at http://${hostname}: ${port}`);
})