import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (description, getRound) => {
  const name = greetUser();
  let correctAnswersCount = 0;

  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = getRound();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Answer: ');

    if (gamerAnswer === rightAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default runGame;
