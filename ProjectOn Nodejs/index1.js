const http = require ('http')
const fs = require('fs');
const path = require( 'path' );

const hostname = "localhost"; 
const port = 15000; 

const server = http.createServer((req,resp)=>{

    // to check we received req from which url and in what method
    console.log('request for'+ req.url+'by method'+req.method);


        var fileURL;
        if(req.url == '/'){
            fileURL = '/index.html'
        }else if(req.url =='/add'){
            fileURL = '/add.html'
        }
    }

    //var filePath = path.resolve('./public'+ fileURL)
).listen(port);


//https://github.com/AnkitGaikwad/fsHtmlJsTask.git