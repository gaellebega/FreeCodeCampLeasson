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

//optional chaining operator(?.) this is the way of accessing if something eist without cousing an error when we have undefined and null to access the nested propeties of an object

const user={};
//this is gonna retur undefined instead of the errors
console.log(user.address?.street);


const user2={
  name:"igabe",
  contactinfo:{
    email:"gaby@gmail.com"
  }
};
console.log(user2.contactinfo?.email);
console.log(user2?.name);

const university={name:"UR", age:30,location:"Huye"}
const {name,location}=university;

console.log(name);
console.log(location);