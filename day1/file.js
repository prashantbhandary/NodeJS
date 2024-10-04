const fs= require("fs");

// fs.writeFileSync("./text.txt","hello, its me prahsant")

// fs.writeFile("./text.txt","heyy file", (err)=>{})

const result= fs.readFileSync("./text.txt","utf-8")
console.log(result)