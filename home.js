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
//but htis one increment directly
console.log(++x); //this is gonna return 6;
console.log(x++);//this is gonna return  be 5
//cz it firdt return the value and then increment after
console.log(x)
//then after its gonna be 6


let f=5;
let d=f++;
//this is gonna return the value of f first because you know that the post increment the way it works is it first return the value it had before  but then 
console.log(d++);
console.log(d);

//to update our value immediatly we use the prefix

//Unary Operator
//we use it to convert numbers
const str="42";
const strToNum=+str;
console.log(typeof strToNum);
console.log(typeof str);

const stri="34";
const striToNegative=-stri;
console.log(typeof stri)
console.log(striToNegative);

let isOnline=true;
console.log(!isOnline);//here is gonna be false;
let isOffline=false;
console.log(!isOffline);//here is gona be true;


const num=5;
console.log(~num); //because to get to get

//void return the undefined;

const results=void(2+3);
console.log(results);

if(null){
  console.log("it will not run");
}
if("freeCodeCamp"){
  console.log("it willl run");
}

const ages=34;
if(ages>30){
  console.log("you are allowed to enter int he group");
}
else{
  console.log("please go out");
}

const prompt = require('prompt-sync')();
let score =prompt("enter your score:")

if(score>=90){
  console.log("You have got A")
}
else if(score==200){
console.log("ypu are above the grade required go back to the school")
}
else if(score>=100){
console.log("thansk you have got full  marks")
}
else if(score>=98){
console.log("congrats, Almost 100")
}
else{
console.log("You are out of the console :(")
}

let temperature=20;
const weather = temperature >25?"sunny":"cool";
console.log(`Today it is currently ${weather} day!`)

const smallest = Math.min(1,2,3,4,5,);
console.log(smallest);

const Largest=Math.max(1,2,3,4,5);
console.log(Largest);

//to round the numbers if you want you may use this

console.log(Math.ceil(4.5))//5 increase
console.log(Math.floor(4.5));//4 decrease
//Math.round is the hybrid of both math.ceil and maths.floor
//like it round to the nearest number

//math.trunc is used to remove the decimal part of the number

console.log(Math.trunc(2.9));//2
console.log(Math.trunc(9.1));//9

console.log(Math.sqrt(81));//7
console.log(Math.cbrt(27));//3

//if you need to get the absolute value of a number you gonna do like this

console.log(Math.abs(-5));
console.log(Math.abs(5));

console.log(Math.pow(2,3))//to mean this is ginna be 2 power 3
console.log(Math.pow(5,3))//5 power 3

let randomNum = Math.random()
console.log(randomNum);

console.log("now generate a random number between these two")
let min=1;
let max=100;
console.log(Math.random(min,max));

//this is the formula to generate the random number that are between 2 values
//which is gonna produce the floating number that are between those 2
Math.random()*(max-min) + min;
//example in the usage
//This differs from the Math.floor() and Math.ceil() methods, which round down and up to the nearest whole integer, respectively.

//Create a new variable called numRounded and assign the result of rounding the number 2.7. Then, log the value of numRounded to the console.
//Below that, create another new variable called numRounded2 and assign the result of rounding the number 11.2. Then, log the value of numRounded2 to the console.
const numRounded=Math.round(2.7);
console.log(numRounded);
const numRounded2=Math.round(11.2);
console.log(numRounded2);


//to get the random number between 1 and 5 you gonna get it like this

Math.floor(Math.random()*5)+1;
//because the numbers were 6and 1 so its gonna be *(5-1+1)+1
//if you try to divide a number by 0 then js will return the infinity

//when we have something like this
let problem=2**(3**2);
//then js is gonna make it like this
console.log(problem);