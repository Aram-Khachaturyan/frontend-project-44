const readlineSync = require('readline-sync');

const greetUser = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

module.exports = greetUser;
