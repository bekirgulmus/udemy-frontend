const points = [70,75,25,35,10,80,27];

const highPoints = points.find(point => {
  return point > 70;
});

console.log(highPoints);
