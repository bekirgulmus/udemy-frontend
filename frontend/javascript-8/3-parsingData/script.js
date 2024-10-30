const variable = [
  {hobby : 'swimming', person: 'Can'},
  {hobby : 'playing a card', person: 'Can'},
  {hobby : 'take a trip', person: 'Can'},
]

localStorage.setItem('todos',JSON.stringify(variable));

let todos = localStorage.getItem('todos');
console.log(todos);

const storedData = localStorage.getItem('todos');
console.log(JSON.parse(storedData));
