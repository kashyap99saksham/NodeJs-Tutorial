// var fs = require('fs')

// var readStream = fs.createReadStream('ReadWriteFile.txt','utf8')
// var writeStream = fs.createWriteStream('WriteFile.txt') 
// readStream.pipe(writeStream)        //It does not need to call any event [Very automatically do things]

 

// Reading Local file and Print on browser
// const http=require("http")
// var fs = require('fs')

// http.createServer((req,res)=>{

//     res.writeHead(200, {'Content-Type': 'text/plain'}); 
//     var readStream = fs.createReadStream('ReadWriteFile.txt','utf8')
//     readStream.pipe(res)
    
// }).listen(3000,()=>console.log('Running'))


//Now Serve HTML page to browser
// const http=require("http")
// var fs = require('fs')

// http.createServer((req,res)=>{

//     res.writeHead(200, {'Content-Type': 'text/html'}); 
//     var readStream = fs.createReadStream('ReadHTMLFile.html','utf8')
//     readStream.pipe(res)
    
// }).listen(3000,()=>console.log('Running'))


//Now Serve JSON data to browser
const http=require("http")

http.createServer((req,res)=>{

    res.writeHead(200, {'Content-Type': 'application/json'});
    var jsonobj = {
        name:"saksham",
        age:"20",
        city:"Gzb"
    } 
    // res.end(jsonobj)    //it cant print json data ||only accepts strings not object
    res.end(JSON.stringify(jsonobj))
    
}).listen(3000,()=>console.log('Running'))


