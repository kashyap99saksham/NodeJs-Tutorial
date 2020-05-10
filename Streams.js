// var fs = require('fs')
// var readStream = fs.createReadStream('ReadWriteFile.txt',"utf8")       //This inherited the EventEmitter base class so it has all function of that

// var data 
// readStream.on('data',(chunk)=>{                 //It Reads Data in chunks
//     console.log("--*---*------*-----*-------*----------*---------")
//     // data += chunk        //We can save data
//     console.log(chunk)
// })

// readStream.on('end',()=>{
//     console.log("------------------------END-------------------------")
// })


// For writeStream
var fs = require('fs')
var readStream = fs.createReadStream('ReadWriteFile.txt',"utf8")       //This inherited the EventEmitter base class so it has all function of that
var writeStream = fs.createWriteStream('WriteFile.txt')

readStream.on('data',(chunk)=>{                 //It Reads Data in chunks
    console.log("--*---*------*-----*-------*----------*---------")
    writeStream.write(chunk)
})

readStream.on('end',()=>{
    console.log("------------------------END-------------------------")
}) 