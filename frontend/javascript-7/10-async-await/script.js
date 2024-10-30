const getTodos = async () => {
  let response = await fetch('example/can.json');
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

//console.log(getTodos());

getTodos().then((response) => {
  console.log(response);
}).catch(err => console.log(err));

(async () => {
  const data = await getTodos();
  console.log(data);
})();


