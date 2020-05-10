// Asynch..... is Based On The approch in which .. it never wait for anyone... It gives output depend On FCFS.
// By Default Asynch..  Is Turned-On With Every FileSystem Functions.
// ON Other Hand- Synchrons Is based On Line By Line (Can Wait for getting The file data)

// Below is example of Asyn...
var fs = require("fs")
fs.readFile(__dirname + "/PlainText.txt","utf8",(Error,Data)=>{

    if(Error)   throw Error
    console.log(Data)
});
console.log("File Not Completed But I m Running First Coz I m Async.. By default.. :)")

// --------------------------------------------------------------------------------------------
// // Below is example of Syn...
var fs = require("fs")
try{
     var data=fs.readFileSync(__dirname + "/PlainText.txt","utf8")
     console.log(data)
}catch(e){
    console.log(e)
}
console.log("File Completed And I m Running Last Coz I m Sync :( ")

