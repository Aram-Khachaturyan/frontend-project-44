import runGame from '../index.js';
import getRandomIntInclusive from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b === 0 ? Math.abs(a) : getGCD(b, a % b));
const minRandomNum = 1;
const maxRandomNum = 100;

const getRound = () => {
  const randomNum1 = getRandomIntInclusive(minRandomNum, maxRandomNum);
  const randomNum2 = getRandomIntInclusive(minRandomNum, maxRandomNum);

  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(getGCD(randomNum1, randomNum2));

  return [question, answer];
};

const runGameGcd = () => {
  runGame(description, getRound);
};

export default runGameGcd;
