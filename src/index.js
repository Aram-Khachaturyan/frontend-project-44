import readlineSync from 'readline-sync';
import greetUser from './welcome.js';
const runGame = () => { greetUser (); }

const randomNum = Math.round(Math.random() * 100); 
  console.log(`Your number is ${randomNum}`);
  
  const gamerAnswer = readlineSync.question('Your answer: ');
  if (gamerAnswer === rightAnswer) {
  console.log('Correct!')
  }

  else {
  console.log('"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, ${name}!')}
  


export default runGame;

