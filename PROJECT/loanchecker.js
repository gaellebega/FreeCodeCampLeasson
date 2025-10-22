const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome,creditScore){
if(annualIncome>=minIncomeForDuplex&& creditScore>=minCreditScoreForDuplex){
  return "You qualify for a duplex, condo, and car loan."
}
else if(annualIncome>= minIncomeForCondo&&creditScore>=minCreditScoreForCondo){
  return "You qualify for a condo and car loan."
}
else if (creditScore >= minCreditScoreForCar && annualIncome >= minIncomeForCar){
  return"you qualify for a loan";
}
else{
      return "You do not qualify for any loan.";
}
}
const duplexLoanMsg=getLoanMessage(8500,850);
const condoLoanMsg=getLoanMessage(6500,690);
const carLoanMsg=getLoanMessage(45000,660);
const noLoanMsg=getLoanMessage(25000,550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);