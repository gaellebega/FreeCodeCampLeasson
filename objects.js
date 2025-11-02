const person={
  name:"Alice",
  Age:20,
  class:"U2",
  location:"Paris",
  "secondProperyName":"Mukamana"

};

//to access the properties of the object we have only 2 ways

console.log(person.name);
console.log(person["name"]);
console.log(person["secondProperyName"])

//to beable to access the string keys we have to make sure we are doing it right
//by doing it we can not use the dot notation in js we have to use the barcket notation

let school={
  name:"UR",
  location:"Kigali",
  creationDate:1990
}

//we can also use the bracket notation to get the propety names dynameically.
let propertyName="location";
console.log(school[propertyName]);
console.log(school.name)

const anotherOb={
  height:"12meters",
  siblings:2,
  motherName:"Zankus"
}

console.log(anotherOb.hasOwnProperty("siblings"));

console.log(delete anotherOb.height);
console.log(anotherOb.height);//to check if it is still there
const {motherName,...remainingProperties}=anotherOb;
console.log(remainingProperties);
//how to check if a method has own a property

//we use the hasOwnProperty method

const oldFriends={
  name1:"kado",
  name2:"sk",
  name3:"Levi"
};
// console.log(oldFriends.hasOwnPropety("name3"));
console.log("name2" in oldFriends);

//we also check if the property exist by doing this also

console.log(oldFriends.name2 !== undefined);//this is gonna return true cz the property name2 do exists
console.log(oldFriends.color!== undefined);//this is gonna return false

//nested objects
const schools={
  name:"UR",
locations:{
adress:"kigali",
phone:{
  whatsapp:"begs",
}
}

}
//you can also use this
console.log(schools.locations.phone.whatsapp);
//you can also use the bracket notation
console.log(schools["locations"]["phone"]["whatsapp"])

const anotherPerson={
  name:"Uwimana",
  age:30,
  adresses:[
{type:"home",street:"123-123 main strt", city:"Kigali"},//this is at index 0
{type:"work", street:"345-120 main strt", city:"Gasabo"},//this is at index 1
  ]
}
console.log(anotherPerson.adresses[1]);

let people={
  id:1,
  id:2,
  group1:[
   { name:"kanjosi",age:20,height:"12mt" },
   {name:"kanjogera",age:30,height:"30mt"},
  ]
}
console.log(people.group1[1])