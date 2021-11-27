const os = require("os");
// получим имя текущего пользователя
let userName = os.userInfo().username;


function hello(n){
	console.log(`Hello ${n}`);
}	
 
module.exports.username = userName;
module.exports.hello = hello;