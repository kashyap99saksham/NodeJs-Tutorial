const http=require("http")
const fs = require("fs")

http.createServer((req,res)=>{

    if(req.url === "/" || req.url === "/home")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream("ReadHTMLFile.html").pipe(res)
    } else if(req.url === "/api")
    {
        res.writeHead(200, {'Content-Type': 'application/json'});
        var jsonobj = {
            name:"saksham",
            age:"20",
            city:"Gzb"
        } 
        res.end(JSON.stringify(jsonobj))    
    }
    else{
        res.end("Wrong URL")
    }
        
}).listen(3000,()=>console.log('Running'))



// Like This way we can add more page routing [about.html etc...]