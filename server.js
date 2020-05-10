const http=require("http")

http.createServer((req,res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'}); //here we can use /plain as well || if we dont wnna apply html
    res.write("Welcome")
    res.end()   //Here we can also pass any string | last msg displayed on Screen before end
}).listen(3000,()=>console.log('Running'))
 