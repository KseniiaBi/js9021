let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);


// const mod = require('./mod');
// const User = require('./u.js');

// mod.hello(mod.username);

// let ann = new User('Ann', 22);
// ann.sayHi();

// const http = require("http");
// http.createServer(function(request,response){
//      console.log(request);
//     response.end(`Hello  NodeJS!`);
//      
// }).listen(3000, "127.0.0.1",function(){
//     console.log("Сервер начал прослушивание запросов на порту http://127.0.0.1:3000");
// });
