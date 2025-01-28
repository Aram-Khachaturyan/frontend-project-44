import runGame from '../index.js';
import getRandomIntInclusive from '../general.js';

const description = 'What number is missing in the progression?';

//создаем переменную с прогрессией.отдаём ей в функции старт длину и шаг.создаём цикл, который будет 
// рандомно закидывать пустое место

const generateProgression = (start, length, step) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
    const stepFor = progression.push(start + step * i); }
console.log(stepFor);
    return progression;

};
    // начинаем Раунд
    // определяем переменные старт, шаг, длину с использованием рандома
    // переменная вопрос в котору входят все указанные переменные
    // переменная ответ для определения правильности
    // возврат вопроса ответ

const getRound = () => {
  const start = getRandomIntInclusive(1, 10);
  const length = getRandomIntInclusive(5, 10);
  const step = getRandomIntInclusive(1, 10);
  const question = [start, length, step];
  const answer = (progression === question);
  return [question, answer];
};

const runGameProgression = () => {
    runGame (description, getRound);
};

export default runGameProgression;