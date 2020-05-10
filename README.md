# NodeJs-Tutorial

## Creating Server With NodeJs

    const http=require("http")
    
    http.createServer((req,res)=>{
    
    res.writeHead(200, {'Content-Type': 'text/html'}); 
> here we can use plain as well || if we dont wanna apply html

    res.write("<h1>welcome</h1>")
    res.write(req.url)
    res.end(body) 
>     Here we can also pass any string | last msg displayed on Screen before end
    }).listen(80,()=>console.log('Running'))
   
  ## SetTimeOut
setTimeout(function)
