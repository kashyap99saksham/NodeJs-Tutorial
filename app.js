const http=require("http")

http.createServer((req,res)=>{
    const body= "my self aditi sinha"
    const content_length=body.length

    res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': content_length}); //here we can use /plain as well || if we dont wnna apply html
    // res.write("<h1>welcome</h1>")
    // res.write(body)
    // res.write(req.url)
    res.end(body)   //Here we can also pass any string | last msg displayed on Screen before end
}).listen(80,()=>console.log('Running'))
 ////
 setTimeout(function)