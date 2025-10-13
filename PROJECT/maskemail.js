function maskEmail(email){
  const index=email.indexOf("@");
  const first=email[0];
  const last = email[index-1];
  const middleCount=index-2;
  const start="*".repeat(middleCount);
  const domain=email.slice(index);

  return first+start+last+domain;

}
console.log(maskEmail("uwimana@gmail.com"));
console.log(maskEmail("akaliza@gmail.com"))
console.log