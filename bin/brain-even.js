#!/usr/bin/env node
import readlineSync from 'readline-sync';
const isEven = () => (randomNum % 2 === 0 ? "yes" : "no" );
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomNum = Math.round(Math.random() * 100); 
  console.log(`Your number is ${randomNum}`);
  
  const gamerAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = (randomNum % 2 === 0 ? "yes" : "no" );
  if (gamerAnswer === rightAnswer) {
  console.log('Correct!')
  }

  else {
  console.log('"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, ${name}!')}

  const runGame = () => {
    
  }
  
  export default runGame;