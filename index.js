const fs = require('fs')
const path = require( 'path' )
const dirPath = path.join(__dirname, 'files')

// for creat files in loop
// for (i=0; i<5; i++){
//     fs.writeFileSync(dirPath  + '/app' + i +'.txt', 'A simple text file');
// };

//for read files directory by using path

fs.readdir(dirPath,(error,files)=>{
    files.forEach((item)=>{
        console.log('file name is', item)
    })
})