import readlineSync from 'readline-sync';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumber) => randomNumber % 2 === 0;

const getRound = () => {
  const randomNum = Math.round(Math.random() * 100);
  console.log(`You/'r number is ${randomNum}`);
  const gamerAnswer = readlineSync.question('Answer: ');
  const rightAnswer = (isEven ? 'yes' : 'no');
  if (gamerAnswer === rightAnswer) {
    console.log('Correct!');
  }

else {
    console.log('try again');
}
};

const runGameEven = () => {
  runGame(description, getRound);
};

export default runGameEven;
