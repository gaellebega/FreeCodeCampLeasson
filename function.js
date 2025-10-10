const sum= function(num1,num2){
  return num1+num2;
}
console.log(sum(4,5));//it worked

function greetings (name="Uwimana"){
  console.log("hello"+name+"hope you are good!")
}
greetings();
//here is gonna take the name as aline and also the name as uwimana
greetings("aline");

//arrow functions
//when 
function greetingsUs(name1){
  console.log("Hello"+name1+"hope everything is fine!")
}
greetingsUs();
//with the arrow function we are gonna make it look like this
  greetingUs = name2=> console.log("Hello"+name2+"hope everything is fine!")
greetingUs("uwimana");
//the reason why it was not working is bcz you can not work with the arroe functions and then add the word function they use let const and var

//here there is a small example of using the calculatoins

function calculateArea(w,h){
console.log("the area is "+w*h+"cm"+(2**1))
}
calculateArea(2,3);


const calculateAreaa=(w,h)=>{
  return "the area is "+w*h+"cm"+(2**1);
}
//when we have used the return then to be able to see our output we need to console the function itself
console.log(calculateAreaa(5,8));