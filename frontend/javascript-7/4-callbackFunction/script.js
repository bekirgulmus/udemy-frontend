const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('Başarılı cevap alamadık..', undefined);
    }
  });

  request.open('GET','https://jsonplaceholder.typicode.com/todoss');
  request.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

