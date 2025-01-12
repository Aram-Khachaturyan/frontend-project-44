import readlineSync from 'readline-sync';
import runGame from '../index.js';
import getRandomIntInclusive from '../general.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const getRound = () => {
  const randomNum = getRandomIntInclusive(1, 100);
  console.log(`You'r number is ${randomNum}`);
  const gamerAnswer = readlineSync.question('Answer: ');
  const rightAnswer = (randomNum % 2 === 0 ? 'yes' : 'no');
  if (gamerAnswer === rightAnswer) {
    console.log('Correct!');
  };

else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let\'s try again, ${name}!`);
}
};

const runGameEven = () => {
  runGame(description, getRound);
};

export default runGameEven;
