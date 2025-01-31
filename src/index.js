import readlineSync from 'readline-sync';
import greetUser from './welcome.js';

const runGame = (description, getRound) => {
  const name = greetUser();
  
  console.log(description);
  
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = getRound();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Answer: ');

    if (gamerAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Lets try again, ${name}!`);
      break;
    }
  }
  
  console.log(`Congratulations, ${name}`);
};
export default runGame;
