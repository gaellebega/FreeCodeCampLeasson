function celisiusToFareneheit(celsius){
  //declare with always let and const inside the function to avoid the grobal variable creation
  const fareneheit = (celsius*9/5)+32;
  return fareneheit;
}
//nana because there was nothing to pass in here.
console.log(celisiusToFareneheit());