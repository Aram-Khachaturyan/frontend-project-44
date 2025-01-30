import runGame from '../index.js';
import getRandomIntInclusive from '../general.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (randomNumber) => {
  if (randomNumber <= 1) return false;
  if (randomNumber === 2) return true;
  if (randomNumber % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(randomNumber); i += 2) {
    if (randomNumber % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const question = getRandomIntInclusive(1, 100);
  const answer = (isPrime(question) ? 'yes' : 'no');
  return [question, answer];
};

const runGamePrime = () => {
  runGame(description, getRound);
};

export default runGamePrime;
