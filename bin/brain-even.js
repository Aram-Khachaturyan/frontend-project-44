#!/usr/bin/env node
console.log('Answer "yes" if the number is even, otherwise answer "no".');
function getRandom() {
  const num = Math.random() * 100;
  if (num % 2 === 0) {
    console.log('yes')
  }
  else {
  console.log('no')}
};
getRandom();
