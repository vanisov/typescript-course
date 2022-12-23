const userName = 'Vlad';

const add = (a: number, b: number = 0) => a + b;

const printOutput: (a: string | number) => void = output => console.log(output);

const button = document.querySelector('button')

if (button){
  button.addEventListener('click', event => console.log(event));
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Vlad',
  age: 18
};

const copiedPerson = { ...person }
