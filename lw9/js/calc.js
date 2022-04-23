function stringToArray(str) {
  let returnedArr = '';
  for (let i = 0; i < str.length; ++i) {
    if (str[i] == '(' || str[i] == ')') returnedArr += ' ' + str[i] + ' ';
    else  returnedArr += (str[i]);
  }
  returnedArr = returnedArr.split(' ');
  returnedArr = returnedArr.filter(Boolean);
  for (let i = 0; i < returnedArr.length; ++i)
  {
    if (Number(returnedArr[i])) returnedArr[i] = Number(returnedArr[i]);
  }
  return returnedArr;
}

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
      if (b !== 0) return a / b;
      else console.log('Ошибка! деление на ноль!');
    }
}


function calc(str) {
  const actions = ['+', '-', '*', '/'];
  let result;
  let isOver;
  let stack = [];
  let b = "";
  let arr = '';

  if (!checkClosedBrackets(str)) {
      console.log('Ошибка ввода. Проверьте скобки!');
      return;
  }

  if (str !== undefined) arr = stringToArray(str);
  arr.forEach(function(item){
    if (actions.indexOf(item) !== -1)
      stack.push(item)
    else if ((Number(item)) || item == 0) {
      b += item;
        while (Number(stack[stack.length-1])) {
          const a = stack.pop();
          const action = stack.pop();
          if (action === undefined) {
            console.log('Ошибка ввода. Пропущено действие');
            return;
          }
          else b = makeCalc(action, parseFloat(a), parseFloat(b));
        }
        stack.push(b);
        b = "";
    }
  })

  result = stack.pop();
  isOver = stack.pop();
  if (isOver === undefined) console.log(result);
  else console.log('Ошибка ввода. Некорректные аргументы!');
}
