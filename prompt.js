//first you gonna need to insatll the prompt by writting npm prompt-sync
const prompt=require("prompt-sync")();
let userName=prompt("What is your name?","Guest");
console.log(userName);

let age= prompt("How old are you?");
if(age!==null){
  console.log("your age is "+age+" years old.")
}
else{
  console.log("User canceled the prompt");
}