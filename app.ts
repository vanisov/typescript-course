// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Vlad',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
};

if (person.role === Role.AUTHOR) {
  console.log('is author');
};