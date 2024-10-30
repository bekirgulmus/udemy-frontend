const kutu = document.querySelector('.kutu');

kutu.addEventListener('mousemove', (e) => {
  //console.log(e);
  // console.log(e.offsetX,e.offsetY);
  kutu.textContent = `X Koordinatı: ${e.offsetX}, Y Koordinatı: ${e.offsetY}`;
})


document.addEventListener('wheel', e => {
  console.log(e.pageX, e.pageY);
})
