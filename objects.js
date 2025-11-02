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

console.log(oldFriends.name2 !== undefined);

