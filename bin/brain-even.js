#!/usr/bin/env node
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function getRandom() {
  

  for (let i = 0; i < 3; i=+1) {
  const randomNum = Math.round(Math.random() * 100); {
  console.log('Your number is ${randomNum}');}

  const gamerAnswer = readlineSync.question(' ');
  const rightAnswer = (randomNum % 2 === 0);
  if (gamerAnswer === rightAnswer) {
    console.log('Correct!')
  }
    
  else {
  console.log('"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, ${name}!')};
  return;
};
}
console.log('Congratulations, ${name}!');