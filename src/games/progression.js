import runGame from '../index.js';
import getRandomIntInclusive from '../helper.js';

const description = 'What number is missing in the progression?';

const minRandomStartNum = 1;
const maxRandomStartNum = 15;
const minRandomLength = 5;
const maxRandomLength = 10;s
const minRandomStep = 2;
const maxRandomStep = 20;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};s

const getRound = () => {
  const start = getRandomIntInclusive(minRandomStartNum, maxRandomStartNum);
  const length = getRandomIntInclusive(minRandomLength, maxRandomLength);
  const step = getRandomIntInclusive(minRandomStep, maxRandomStep);
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
