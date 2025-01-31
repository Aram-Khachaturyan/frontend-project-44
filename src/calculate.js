// eslint-disable-next-line consistent-return
const calculate = (randomNum1, randomNum2, operation) => {
  switch (operation) {
    case '+':
      return randomNum1 + randomNum2;
    case '-':
      return randomNum1 - randomNum2;
    case '*':
      return randomNum1 * randomNum2;
    default: { console.log('Wrong');
    }
  }
};

export default calculate;
