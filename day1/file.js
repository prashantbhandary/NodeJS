const fs= require("fs");
// const os = require("os")
// console.log(os.cpus().length) finding the core of computer

// fs.writeFileSync("./text.txt","hello, its me prahsant")

// fs.writeFile("./text.txt","heyy file", (err)=>{})

// const result= fs.readFileSync("./text.txt","utf-8")
// console.log(result) //blocking

fs.readFile("./text.txt","utf-8", (err, result)=>  //non blocking - asychronous
{
    if (err){
        console.log("Error:" , err);
    }
    else {
        console.log(result);
     }
        }
)

