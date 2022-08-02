var http = require("http");
const port = 3000;
const server = http.createServer(function(req, res){
    res.write("<h1>Hello World!</h1>")
    res.end();
})

server.listen(port, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server is listening....");
    }
});
