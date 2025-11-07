// const data=require(data.json);
// console.log(data.name);
// console.log(data.age);

const person={
  name:"Begz",
  age:20,
  skills:["JS","React"]
};
const jsonString = JSON.stringify(person);
console.log(jsonString);

const jsonString2='{"name":"Bebe","age":10, "skills":["eating","dancing"]}';
const child=JSON.parse(jsonString2);
console.log(child.name);
console.log(child.age);