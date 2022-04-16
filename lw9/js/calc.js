let isCorrect;

function checkClosedBrackets(str) {
  let openedBracketsCounter = 0;
  const BrArr = ['(', ')'];

  for (let i = 0; i < str.length; i++) {

    if (BrArr.indexOf(str[i]) !== -1) {

      if (str[i] === '(') {
        openedBracketsCounter++;
      } else {
          if (openedBracketsCounter === 0) return false;
          openedBracketsCounter--;
      }
    }
  }

  return openedBracketsCounter === 0;
}

function getLastNumber(Stack) {
  const a = Stack.pop();

  Stack.push(a);

  return !isNaN(parseInt(a));
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
      console.log('Введите действие!');
      isCorrect = false;
    }
  }
}

function calc(str) {
  const Actions = ['+', '-', '*', '/'];
  let Result;
  let IsOver;
  isCorrect = true;
  let Stack = [];
  let b = "";

  if (!checkClosedBrackets(str)) {
      console.log("Ошибка ввода. Проверьте скобки!");
      return;
  }
  str = str.trim().replace('(', ' ').replace(')', ' ');
  for (let i = 0; i < str.length; i++) {
    if (Actions.indexOf(str[i]) !== -1) Stack.push(str[i]);
    else
      if (!isNaN(parseInt(str[i]))) {
        b += str[i];
        if (isNaN(parseInt(str[i+1]))) {
          while ( getLastNumber(Stack) ) {
            const a = Stack.pop();
            const action = Stack.pop();
            b = makeCalc(action, parseInt(a), parseInt(b));
          }
          Stack.push(b);
          b = "";
        }
      }
    }

  Result = Stack.pop();
  IsOver = Stack.pop();
  if ((isCorrect) && (IsOver === undefined)) console.log(Result)
  else if (isCorrect) console.log("Ошибка ввода. Аргумент должен быть целочисленным!");
}
