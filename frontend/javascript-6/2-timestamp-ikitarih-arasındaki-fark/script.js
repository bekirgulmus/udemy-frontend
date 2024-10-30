const startDate = new Date('08/15/2018 9:45:00');
const now = new Date();

console.log(startDate);

const diff = now.getTime() - startDate.getTime();

const mins = Math.round(diff / 1000 / 60);
console.log(`Video çekmeye ${mins} dakika önce başladım.`);
const hours = Math.round(mins / 60 );
console.log(`Video çekmeye ${hours} saat önce başladım.`);
const days = Math.round(hours / 24 );
console.log(`Video çekmeye ${days} gün önce başladım.`);
const years = Math.round(days / 365);
console.log(`Video çekmeye ${years} yıl önce başladım.`);

const timestamp = 1627727162629;
console.log(new Date(timestamp));
