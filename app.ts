const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // <--- THIS IS A TUPLE
  // A tuple is a fixed-length array, and also a fixed-type array.
} = {
  name: 'Vlad',
  age: 18,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

person.role.push('admin');
person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports',];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}