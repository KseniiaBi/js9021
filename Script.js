let a = 0;  
 
 
if (a >= 0) { 
 console.log('Верно'); 
}  
else{ 
 
 console.log('Неверно'); 
} 
 
a = 1; 
if (a >= 0) { 
 console.log('Верно'); 
}  
else{ 
 
 console.log('Неверно'); 
} 
 
 
a = -1; 
 
if (a >= 0) { 
 console.log('Верно'); 
}  
else{ 
 
 console.log('Неверно'); 
}


let test = true; 
 
if(test){ 
  console.log('Верно'); 
}else{ 
  console.log('Неверно'); 
} 
 
let testick = (!test) ? 'Верно' : 'Неверно'; 
console.log(testick);




let a = 5; 
 
if(a === 0 || a === 2){ 
 a += 7; 
} 
else{ 
   a /= 10; 
} 
console.log(a); 
  
 
a = 0; 
if(a === 0 || a === 2){ 
 a += 7; 
} 
else{ 
   a /= 10; 
} 
console.log(a); 
 
a = -3; 
 
if(a === 0 || a === 2){ 
 a += 7; 
} 
else{ 
   a /= 10; 
} 
console.log(a); 
 
a = 2; 
 
if(a === 0 || a === 2){ 
 a += 7; 
} 
else{ 
   a /= 10; 
} 
console.log(a);
let a =  1;  
let b =  3; 
 
 
if (a <= 1 && b >=3){ 
 console.log(a+b); 
} 
 
else{ 
console.log(a-b); 
} 
 
 
a = 0;  
b = 6; 
 
if (a <= 1 && b >=3){ 
 console.log(a+b); 
} 
 
else{ 
console.log(a-b); 
} 
 
a = 3; 
b = 5; 
 
if (a <= 1 && b >=3){ 
 console.log(a+b); 
} 
 
else{ 
console.log(a-b); 
}


let Persona = {
    name: 'Nick',
    age: 28,
    animal: 'Cat',
    animalName: 'Shypa'
  }
  
  let name = prompt('Привет, меня зовут - ', Persona.name);
  console.log(name);
  
  let age = prompt('Мне лет - ', Persona.age);
  console.log(age);
  
  let animal = prompt('У меня есть домашнее животное - ', Persona.animal);
  console.log(animal);
  
  let animalName = prompt('Имя моей Кошки - ', Persona.animalName);
  console.log(animalName);