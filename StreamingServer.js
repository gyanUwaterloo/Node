const fs = require("fs");
const http = require("http");

http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    

    fs.createReadStream("./assets/video.mp4")
        .pipe(res)
        .on('error',console.error)
}).listen(80,()=>{ console.log("Streaming at localhost")} )