const revPolNot = function(tokens) {
    let stack = [];
    let result;
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else {
        const a = stack.pop();
        const b = stack.pop();
        switch (token) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            result = Math.trunc(a / b);
            break;
          default:
            throw new Error(`Invalid operator: ${token}`);
  
        }
  
        stack.push(result)
      }
    }
  
    return stack.pop();
  }
  
  console.log(revPolNot(['4', '13', '5', '/', '+']));
  