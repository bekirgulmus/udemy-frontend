class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {

  }

  isEmpty() {
    return this.elements.length === 0;
  }

  isFull() : boolean {
    return this.elements.length === this.size;
  }

  push(element: T) {
    if (this.elements.length === this.size) {
      throw new Error('The stack is owerflow');
    }

    this.elements.push(element);
  }

  pop(): T {
    if (this.elements.length === 0) {
      throw new Error('This stack is empty!');
    }
    return this.elements.pop();
  }
}

let numbers = new Stack<number>(5);

function randBetween(low: number, high: number) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

while (!numbers.isFull()) {
  let n = randBetween(1,10);
  console.log(`Push ${n} in to stack.`);
  numbers.push(n);
}

console.log(numbers);
