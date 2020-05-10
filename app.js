// Creating Server.js file
// const http = require("./server")

// -----------------------------------------------------
// Importing Custom Modules
// var hello = require("./WaysOfCustomModules.js")
// console.log(hello.sayHello())
// console.log(hello.sayHII())

// -----------------------------------------------------
// using ReadWriteFile.txt File to read and write
// Asynch..... is Based On The approch in which .. it never wait for anyone... It gives output depend On FCFS.
// By Default Asynch..  Is Turned-On With Every FileSystem Functions.
// ON Other Hand- Synchrons Is based On Line By Line (Can Wait for getting The file data)

// var fs = require("fs")
// var data = fs.readFileSync("./ReadWriteFile.txt","utf8")    
// console.log(data)   //Prints File data
// fs.writeFileSync("NewWriteFile.txt",data)       //Creating New File and insert data 

// Below is example of Asyn... [In asyn We have to make callback function]
var fs = require("fs")
// fs.readFile("./ReadWriteFile.txt","utf8",(Error,Data)=>{            //Reading Asyn
//     if(Error)   
//         throw Error     //Or we can use console.log | console.error(Error)
//     SendMyData(Data)        // This Method is not giving us data so make another function and send data into that 
//     // console.log(Data)
// });
// // console.log("File Not Completed But I m Running First Coz I m Async.. By default.. :)")
// // console.log(OurData)

// SendMyData = (Data) => {
//     fs.writeFile("NewWriteFile.txt",Data,(Error,Data) => {
//         if(Error)   
//             throw Error     //Or we can use console.log | console.error(Error)
//         console.log("Sucess !!")
//     })
// }
// console.log("File Not Completed But I m Writing First Coz I m Async.. By default.. :)")

// To delete any file (Synchronsly Unlink)
const fs = require('fs')

const path = './file.txt'

try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}

// To delete any file (ASynchronsly Unlink)
const fs = require('fs')

const path = './file.txt'

fs.unlink(path, (err) => {
  if (err) {
    console.error(err)
    return
  }

  //file removed
})