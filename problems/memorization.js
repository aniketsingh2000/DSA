const add = (a, b) => {
    console.log("call add")
    return a + b
  
  };
  
  const sub = (a, b) => {
    console.log("call sub")
    return a - b
  
  };
  
  
  const memmozieOne = (fn) => {
  
    const cache = {};
  
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key]
      } else {
        const result = fn(...args);
        cache[key] = result;
        return result;
      }
    }
  
  }
  
  const memozieAdd = memmozieOne(add);
  const memozieSub = memmozieOne(sub);
  
  console.log(memozieAdd(1, 2));
  console.log(memozieSub(1, 2));
  console.log(memozieAdd(2, 2));
  console.log(memozieAdd(2, 1));
  
  console.log(memozieAdd(1, 2));
  console.log(memozieSub(1, 2));
  console.log(memozieAdd(2, 2));
  console.log(memozieAdd(1, 2));
  