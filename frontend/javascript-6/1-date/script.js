const now = new Date();
console.log(now);
console.log(typeof now);

const year = now.getFullYear();
console.log('Year:', year);
const month = now.getMonth() + 1 ;
console.log('Month:', month);
const date = now.getDate();
console.log('Date:', date);
const day = now.getDay();
console.log('Day:', day);
const hours = now.getHours();
console.log('Hours:', hours);
const minutes = now.getMinutes();
console.log('Minutes:', minutes);
const seconds = now.getSeconds();
console.log('Seconds:', seconds);

// 1 Ocak 1970'den sonrasında geçen süresi salise
console.log('timestamp: ', now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
