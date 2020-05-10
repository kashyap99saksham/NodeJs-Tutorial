# :rocket: NodeJs-Tutorial

## :book: Creating Server With NodeJs

    const http=require("http")
    
    http.createServer((req,res)=>{
    
    res.writeHead(200, {'Content-Type': 'text/html'}); 
> here we can use plain as well || if we dont wanna apply html

    res.write("<h1>welcome</h1>")
    res.write(req.url)
    res.end(body) 

>  Here we can also pass any string | last msg displayed on Screen before end

        }).listen(80,()=>console.log('Running'))

   
  ## :watch: SetTimeOut

    setTimeout(()=>{console.log("Do Anything in function | It has Timer)}  , 3000) 
## :watch: setInterval Function

    var count = 0
    var func = setInterval(()=>{
    count++	
    console.log(count,"time passed")
    if(count>10)
	    clearInterval(func)
	},20000)

## :computer: Directory Path With File Name

    console.log(__dirname)
    console.log(__filename)

 
