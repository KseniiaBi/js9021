class User{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	sayHi(){
		console.log(`Hi! My name is ${this.name}, I am ${this.age} years old`);
	}
}


module.exports = User;