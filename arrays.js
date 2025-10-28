//arrays are the ordered list of the elements

let arrays=["uwimana","uwase","uwabo","uwundi","umushaka"]
console.log(arrays.length);

console.log(arrays[3]);

console.log(arrays[3]="muhawenimana");
//to return the index of an element that does not exist you get  an error
console.log(arrays.push("gasana"))
console.log(arrays.pop());
console.log(arrays)
console.log(arrays.unshift("Mukeshimana"));
console.log(arrays.shift());//
console.log(arrays);

//when we have this sign
const colors = ["red", "green", "blue"];

let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"
 // we also have something that they call the rest which is used to provide the remaining set of the arrays

 //how to use the  split reverse  and join methods in js

 let word="holla madrid";
 //when there is no character provided is gonna provide the variable the way it is
 newsentence=word.split("");
 console.log(newsentence)
 console.log(newsentence.reverse());
 console.log(newsentence.join(""));
//  console.log(word);

let anotherword="Heloo"
console.log(anotherword.split());

let greeting="hello guyz";
let solution=greeting.split("");
solution.reverse();
console.log(solution.join("-"));