//create and write file

const fs= require('fs');

fs.writeFileSync('read.txt','hello world, welcome to our planet');

//from using append command we can add new data into file also we can creat file by using append command

fs.appendFileSync('read.txt', 'there is some rules here for living')

// read file command

const buffData = fs.readFileSync('read.txt');
console.log(buffData);

// command for convert data intoreadable format 

buffData = fs.readFileSync('read.txt');

let org_data = buffData.toString();
console.log(buffData);

// for rename file command 

//fs.rename('read.txt','rewrite.txt');