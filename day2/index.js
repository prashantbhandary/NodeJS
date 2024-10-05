const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("new req for server");
    res.end("hey its me prashnt");
});

server.listen(3300 , () => console.log("server"));

