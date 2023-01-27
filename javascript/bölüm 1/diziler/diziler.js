// let urun1 = "iphone 12";
// let urun2 = "iphone 13";
// let urun3 = "iphone 13 pro";

let urunler = ["iphone 12","iphone 13","iphone 13 pro"];
let fiyatlar = [9000,12000,17000];
let renkler = ["gold","siyah","beyaz"]


let urun1 = ["iphone 12",9000,"gold"];
let urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = "12000";
urun2[2] = "beyaz";
let urun3 = ["iphone 13 pro",
17000,
["siyah","beyaz","mavi"]];
// urun3[2] = "mavi";
console.log(urun3[2][0]);
console.log(urun3[2][1]);
console.log(urun3[2][2]);
console.log(typeof urun3[2]);

// console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
// console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
// console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

// console.log(urunler[0]);
// console.log(urunler[1]);
// console.log(urunler[2]);
// console.log(kursAdi[5]);

let kursAdi ="Komple Web Geliştirme Eğitimi";
console.log(kursAdi[5]);
console.log(kursAdi.split(" ")[3]);