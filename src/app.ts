const person = {
  name: "Vlad",
  age: 18
};

const copiedPerson = { ...person};

const add = (...numbers: number[]) => {
  let result = 0;
  return numbers.reduce((curResult, curValue)=> {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);