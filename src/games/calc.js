import readlineSync from 'readline-sync';
import runGame from '../index.js';
import getRandomIntInclusive from '../general.js';

const description = 'What is the result of the expression?';


const getRound = () => {
  const randomNum1 = getRandomIntInclusive(1, 100);
  const randomNum2 = getRandomIntInclusive(1, 100);
  const randomOperation = getRandomIntInclusive(1, 3);
  //console.log(`Question: ${randomNum1} ${operation} ${randomNum2}`);







  //if (randomOperation === 1) {
    //console.log(`Question: ${randomNum1} + ${randomNum2}`);
  //} else if (randomOperation === 2) {
    //console.log(`Question: ${randomNum1} - ${randomNum2}`);
  //} else if (randomOperation === 3) {
    //console.log(`Question: ${randomNum1} * ${randomNum2}`);}
  
  const gamerAnswer = readlineSync.question('Answer: ');

  let rightAnswer = 0;
  switch (randomOperation) {
    case '1': {
      rightAnswer = randomNum1 + randomNum2;
      operation = '+';
      break; }
    case '2': {
      rightAnswer = randomNum1 + randomNum2;
      operation = '-';
      break; }
    case '3': {
      rightAnswer = randomNum1 + randomNum2;
      operation = '*';
      break; }
  
      default:
      console.log(`'gamerAnswer' is wrong answer ;(. Correct answer was 'rightAnswer'. Let's try again, ${name}!`);
  }
 
};

const runGameCalc = () => {
  runGame(description, getRound);
};

export default runGameCalc;
