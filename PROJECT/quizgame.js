//first we create an array that include the 5 objects

const questions=[
{category:"science",
question:"What planet is known as the Red planet?",
choices:["Earth","Mars","Jupiter"],
answer:"Mars"
},
{category:"Geography",
question:"Which continent is the largest by land area?",
choices:["Africa","Asia","Europe"],
answer:"Asia"
},
{category:"History",
question:"Who was the first president of USA?",
choices:["George Washington","Abraham Linclon","John Adams"],
answer:"George Washington"
},
{category:"Technology",
question:"What does 'HTML' stands for?",
choices:["HyperText Markup Language","Home Tool Markup Language","Hyper Transfer Markup Language"],
answer:"HyperText Markup Language"
},
{category:"Sports",
question:"How many players are on Soccer team on the field?",
choices:["9","10","12"],
answer:"10"
}
]
function getRandomQuestion(question){
  const randomIndex=Math.floor(Math.random()*question.length);
  return question[randomIndex];
}
function getRandomComputerChoice(choices){
const randomIndex=Math.floor(Math.random()*choices.length)
return choices[randomIndex];
}
function getResults(question,computerchoice){
  if(computerchoice==question.answer){
    return `The computer's choice is correct`;
  }
  else{
    return `The computer's choices is wrong. The correct answe is ${question.answer}`
  }
}
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);

console.log(randomQuestion);
console.log("Computer choice:", computerChoice);
console.log(result);