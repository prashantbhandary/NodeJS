//url 
// uniform resourse locator
//https   ://www.abs.com/
// Protocal-  Domain   (/ ->root)
//htpps: Hypertext Transfer Protocal Secure
//query parameter 
// ? = - + &
// ? tyo paxi ko kura query parameterr
const http = require("http");
const fs = require("fs");
const url = require('url');

const myserver = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        res.writeHead(204, { 'Content-Type': 'image/x-icon' }); // No content response for favicon
        return res.end();
    }

    const log = `${Date.now()}: ${req.url} New Request \n`;
    const newUrl= url.parse(req.url, true);
    console.log(newUrl)
    fs.appendFile("request.txt", log, (err) => {
        if (err) console.error(err);
    });

    switch (newUrl.pathname) {
        case "/":
            res.end("Welcome to Kriti's Servers ");
            break;
        case "/channel":
            const user= newUrl.query.myname
            res.end(`Hi ${user}, Welcome to prashant Websitee lol`);
            break;
        default:
            res.statusCode = 404;
            res.end("404 Not Found");
            break;
    }
});


myserver.listen(9000, () => console.log("Server running on port 9000"));
