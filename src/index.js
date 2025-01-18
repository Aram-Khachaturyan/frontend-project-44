import readlineSync from 'readline-sync';
import greetUser from './welcome.js';

// создаём функцию игры
const runGame = (description, getRound) => {
// импорттруем приветствие
  const name = greetUser();

  // импортируем дескрипшн игры
  console.log(description);

  // ввод ответа и проверка ответа игрока
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = getRound();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Answer: ');
    // консоль при правильном ответе

    // проверка и консоль для неправильных ответов
    if (gamerAnswer === rightAnswer) {
      console.log('Correct!');
      if (i === 2)
      {
        console.log(`Congrulations, ${name}`);
        break; }
    }

    else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${name}!`);
      break;
    }
  }
};

// экспортируем функцию с игрой

export default runGame;
