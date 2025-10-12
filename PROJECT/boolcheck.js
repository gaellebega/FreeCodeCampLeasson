function booWhoo(value){
  //cz the boolean must be a stirng
  return typeof value === "boolean";
}
console.log(booWhoo(true));
console.log(booWhoo("false"));
console.log(booWhoo(false));
console.log(booWhoo("true"));
console.log(booWhoo(0));
console.log(booWhoo(1));
console.log(booWhoo(true));
booWhoo(false);
booWhoo([1,2,3]);
booWhoo([].slice);
booWhoo({"a":1});
booWhoo(1);
booWhoo(NaN);
booWhoo("a");
booWhoo("true");
booWhoo("false");