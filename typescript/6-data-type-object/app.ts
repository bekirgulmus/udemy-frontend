type Person = {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string
}

let instructor: Person;

instructor = {
  firstName: 'Can',
  lastName: 'Can',
  age: 29,
  jobTitle: 'Software Instructor'
}

let person: {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string
}

person = {
  firstName: 'Can',
  lastName: 'Can',
  age: 29,
  jobTitle: 'Software Instructor'
}



let person2: {
  firstName: string,
  lastName: string,
  age: number,
  jobTitle: string
}= {
  firstName: 'Can',
  lastName: 'Can',
  age: 29,
  jobTitle: 'Software Instructor'
}



console.log(instructor.age);

