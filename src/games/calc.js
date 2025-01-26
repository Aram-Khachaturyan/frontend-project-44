import runGame from '../index.js';
import getRandomIntInclusive from '../general.js';

const description = 'What is the result of the expression?';

const getRound = () => {
  const randomNum1 = getRandomIntInclusive(1, 100);
  const randomNum2 = getRandomIntInclusive(1, 100);
  const operations = ['+', '-', '*'];
  const lastIndex = operations.length - 1;
  const randomOperation = getRandomIntInclusive(0, lastIndex);
  const operation = operations[randomOperation];

  let rightAnswer = 0;
  switch (operation) {
    case '+':
      rightAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      rightAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      rightAnswer = randomNum1 * randomNum2;
      break;
    default: { console.log('Wrong');
    }
  }
  const question = `${randomNum1} ${operation} ${randomNum2}`;
  const answer = rightAnswer.toString();
  return [question, answer];
};

const runGameCalc = () => {
  runGame(description, getRound);
};

export default runGameCalc;
