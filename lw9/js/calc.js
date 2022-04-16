let isCorrect;

function checkClosedBrackets(str) {
  let openedBracketsCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
        openedBracketsCounter++;
      } else if (str[i] === ')') {
          if (openedBracketsCounter === 0) return false;
          openedBracketsCounter--;
      }
    }

  return openedBracketsCounter === 0;
}

function makeCalc(action, a, b) {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default: {
      console.log('Ошибка ввода. Введите действие!');
      isCorrect = false;
    }
  }
}

function calc(str) {
  const actions = ['+', '-', '*', '/'];
  let result;
  let isOver;
  isCorrect = true;
  let stack = [];
  let b = "";

  if (!checkClosedBrackets(str)) {
      console.log("Ошибка ввода. Проверьте скобки!");
      return;
  }

  for (let i = 0; i < str.length; i++) {
    if (actions.indexOf(str[i]) !== -1) stack.push(str[i]);
    else
      if (!isNaN(parseInt(str[i]))) {
        b += str[i];
        if (isNaN(parseInt(str[i+1]))) {
          while (!isNaN(parseInt(stack[stack.length-1]))) {
            const a = stack.pop();
            const action = stack.pop();
            b = makeCalc(action, parseInt(a), parseInt(b));
          }
          stack.push(b);
          b = "";
        }
      }
    }

  result = stack.pop();
  isOver = stack.pop();
  if ((isCorrect) && (isOver === undefined)) console.log(result);
  else if (isCorrect) console.log("Ошибка ввода. Аргумент должен быть целочисленным!");
}
