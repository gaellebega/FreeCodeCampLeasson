//this is the function  that truncate string algorithm
//the word to truncate means to cut of part of string or the number
//we use the slice method to change the part of the string but not the orighinal

let sentence="Hello fututre google dev";
let result=sentence.slice(0,5);
console.log(result);

function truncateStr(num,str){
if(str.length<num){
  return str.slice(0,num)+"..."
}
return str;
}
console.log(truncateStr("Hello",5));
console.log("this is google dev",20)

//when you are using the slice method and you choose to use the negative number then to mean instead of starting from the normal start its gonna start at the end

function confirmEnding(string,target){
  return string.slice(-target.length)===target;
}
console.log(confirmEnding("uwase","se"));