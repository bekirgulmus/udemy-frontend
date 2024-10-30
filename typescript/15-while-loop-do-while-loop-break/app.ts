let counter = 10;

while (counter < 5) {
  console.log(counter);
  counter++;

  if (counter == 3) {
    break;
  }
}


do {
  counter++;
  console.log(counter);
} while (counter < 5);


