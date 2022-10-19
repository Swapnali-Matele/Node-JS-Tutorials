const fs = require('fs');
const path = require( 'path' );


//creat path here standard syntax
//cosnt dirPath = path.join( current_directory, folder_name where we want to create file)
const dirPath = path.join(__dirname, 'CRUD');

// take path as variable fo easy acess somany times 
const filepath =`${dirPath}/apple.txt`;

//creat file syntax 
//fs.writeFileSync(file_path,file_name, file_content)
fs.writeFileSync(`${dirPath}/apple.txt`,'this is fruits'); 

//read file
//standard syntax : fs.readFile(filepath, callback function((argu1, argu2)=>{console.log ( )}))

fs.readFile(filepath, 'utf8',(err, item)=>{
    console.log(item);
})

// update fiel by using appendfile command
//sysntax fs.appendFile( path, data[, options], callback )

fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
    if(!err) {console.log('file is updated')}
})

//remane file 
fs.rename(filepath, `${dirPath}/fruits.txt`,(err)=>{
    if(!err) console.log('file has been updated')
})

// delete file
fs.unlinkSync(`${dirPath}/fruits.txt`)