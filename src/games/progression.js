import runGame from '../index.js';
import getRandomIntInclusive from '../general.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getRound = () => {
  const start = getRandomIntInclusive(1, 10);
  const length = getRandomIntInclusive(5, 10);
  const step = getRandomIntInclusive(1, 10);
  const progression = generateProgression(start, step, length);
  const index = getRandomIntInclusive(0, progression.length - 1);
  const rightAnswer = progression[index];
  progression[index] = '..';
  const question = progression;
  const answer = rightAnswer.toString();
  return [question, answer];
};

const runGameProgression = () => {
  runGame(description, getRound);
};

export default runGameProgression;
