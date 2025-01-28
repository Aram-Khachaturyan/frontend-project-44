import runGame from '../index.js';
import getRandomIntInclusive from '../general.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }

  return getGCD(b, a % b);
};

const getRound = () => {
  const randomNum1 = getRandomIntInclusive(1, 100);
  const randomNum2 = getRandomIntInclusive(1, 100);

  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(getGCD(randomNum1, randomNum2));

  return [question, answer];
};

const runGameGcd = () => {
  runGame(description, getRound);
};

export default runGameGcd;
