//th elogic of the project
//what we need to keep fist letter, the @ sign and the everything between all those

function maskEmail(email){
  //this will help us to get  index of @
email.indexOf("@");
//to be able to get the index before that we need to make things like this
email.slice(0,index);
}
//to be able to get the index of @
console.log(maskEmail());