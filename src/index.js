import readlineSync from 'readline-sync';
import greetUser from './welcome.js';

const runGame = (description, getRound) => {
  // создаём функцию игры

  greetUser();
  // импорттруем приветствие

  // импортируем дескрипшн игры
 console.log(description);
  // создаём логику игры
  // console.log(getRound);
  // консоль для вывода вопроса
   // console.log(`Your number is ${randomNum}`);

  // ввод ответа и проверка ответа игрока
 // const gamerAnswer = readlineSync.question('Your answer: ');
 // if (gamerAnswer === rightAnswer) {
getRound();
   // консоль при правильном ответе
   // console.log('Correct!');
   
    // тут должен быть цикл и консоль с поздравлением

}
// проверка и консоль для неправильных ответов
//else {

//console.log('"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, ${name}!')};
//};

// экспортируем функцию с игрой
export default runGame;
