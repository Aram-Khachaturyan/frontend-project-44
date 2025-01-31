import runGame from '../index.js';
import getRandomIntInclusive from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;
const minRandomNum = 1;
const maxRandomNum = 100;

const getRound = () => {
  const question = getRandomIntInclusive(minRandomNum, maxRandomNum);
  const answer = (isEven(question) ? 'yes' : 'no');
  return [question, answer];
};

const runGameEven = () => {
  runGame(description, getRound);
};

export default runGameEven;
