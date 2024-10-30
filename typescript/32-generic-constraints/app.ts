function merge<U extends object,V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2
  }
}

let person = merge(
  {name: 'Can'},
  {age: '29'}
)

console.log(person);
