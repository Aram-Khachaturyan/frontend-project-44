const calculate = (randomNum1, randomNum2, operation) => {
  let rightAnswer = 0;
  switch (operation) {
    case '+':
      rightAnswer = randomNum1 + randomNum2;
      break;
    case '-':
      rightAnswer = randomNum1 - randomNum2;
      break;
    case '*':
      rightAnswer = randomNum1 * randomNum2;
      break;
    default:
      break;
  }
  return rightAnswer;
};

export default calculate;
