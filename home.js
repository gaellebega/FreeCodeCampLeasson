let name=undefined;
console.log(typeof name);

let example=null;
console.log(typeof example);

let age=30;
console.log(typeof age);

let quote="It\'s a beautiful day!"
console.log(quote);

let statemt ="She said, \"Hello\"";
console.log(statemt);

let fruits=["apple","banana","avaocado","tomato"]
console.log(fruits.indexOf("banana",1))
//when you give it 4 then its gonna return -1 bcz it doesnt have that  like when the substring is not found
//the first index on slice is included but the last is excluded


let message=" we are going to use trim  ";
// let correction=message.trim();
console.log(message.trim());


const organization = "freeCodeCamp";
console.log(organization.indexOf("c"));
//lowercase not found only the uppercase
//when not found it return-1

//when we want to extract the given string we use the slice where(0,6) the lat index is excluded but the first is included

//arithematic operations

let value="abc";
let test=value+2;
let test2=value-5;
let test3=value*9;
let test4=value*20;
console.log(test);
//it works only on the addition otherwise it dont
console.log(test2);
console.log(test3);
console.log(test4);

//when we have more than one operators how do javascript handles it

//we have to start with the multiplication first then we move to
//  the addition and then the substraction and we move just like that
//but when there is brackets it first make whats in the brackets


let result  = 2**3**2;
//here its gonna take this 3 then multiply it to the first2 then after the answer it get its gonna multiply it to the next number
console.log(result);

let multiply = 2*3**5;
//here it is gonna start from the 2 multiply then it back to the single
console.log(multiply);
let a=true;
let b=false;
let c=true;
//this is gonna take && first then its gonna take the ||
console.log(a||b&&c);


let x=5;
console.log(++x); //this is gonna return 6;
console.log(x++);//this is gonna return  be 5
//then after its gonna be 6


