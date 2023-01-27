let simdi = new Date(); // şimdiki tarih-saat

// get metodları
sonuc = simdi;
sonuc = simdi.getDate(); // gün
sonuc = simdi.getDay(); // 0:pazar ...... 6:cumartesi
sonuc = simdi.getFullYear(); // yılı getirir
sonuc = simdi.getHours(); // saati getirir
sonuc = simdi.getTime();

// set metodları
// simdi.setFullYear(2025);
// simdi.setMonth(7); // 0:ocak
// simdi.setDate(15);

sonuc = simdi;


let dogumTarihi = new Date(1987, 0, 31);
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();


let milisecond = simdi-dogumTarihi;
let saniye = milisecond/1000;
let dakika = saniye/60;
let saat = dakika/60;
let gun = saat/24;
let ay = gun/30;
let yil = ay/12;
sonuc = yil;

console.log(sonuc);
console.log(typeof sonuc);