import runGame from '../index.js';
import getRandomIntInclusive from '../helper.js';
import calculate from '../calculate.js';

const description = 'What is the result of the expression?';
const minRandomNum = 1;
const maxRandomNum = 100;

const getRound = () => {
  const randomNum1 = getRandomIntInclusive(minRandomNum, maxRandomNum);
  const randomNum2 = getRandomIntInclusive(minRandomNum, maxRandomNum);
  const operations = ['+', '-', '*'];
  const lastIndex = operations.length - 1;
  const randomOperation = getRandomIntInclusive(0, lastIndex);
  const operation = operations[randomOperation];

  const rightAnswer = calculate(randomNum1, randomNum2, operation)
  const question = `${randomNum1} ${operation} ${randomNum2}`;
  const answer = rightAnswer.toString();
  return [question, answer];
};

const runGameCalc = () => {
  runGame(description, getRound);
};

export default runGameCalc;
