// const http = require("http");
import   http from "http";
import getData from "./fetchAPI.js";
const PORT = 4002;

// const sum=require('./fetchAPI.js');

const server = http.createServer(async(req, res) => {
  res.setHeader("Content-Type", "application/json");
  //res.end(`<h2>Welcome to APP BOSS!</h2>`)
  // res.end(JSON.stringify({msg:"Welcome to APP BOSS"}));
  if (req.url == "/msg" && req.method == "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(`<h2>Greeting of the day!</h2>`);
  }
  else if(req.url=='/data'&& req.method=="POST"){
    const products=await getData();
    if (req.url == "/data" && req.method == "POST") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({msg:products}));
  }else{
    res.setHeader('Content-Type','text/html');
    res.end("<h2 style='comor:red'>Invalid end point</h2>")
  }

  }
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
