//1- "elma, armut,muz ve çilek" elemanlarına sahip bir dizi oluşturunuz.

let dizi1 =["elma","armut","muz","çilek"];

//2- dizi kaç elemanlıdır

let sonuc1 = dizi1.length;

console.log(sonuc1);
//3- Dizinin ilk ve son elemanı nedir
console.log("dizinin ilk elemanı= ",dizi1[0]);
console.log("dizinin son elemanı= ",dizi1[dizi1.length-1]);

//4- elma dizinin bir elemanı mıdır
let aranan = "elma";
let sonuc2 = dizi1.includes(aranan);
console.log(sonuc2);

//5- kiraz meyvesini dizinin sonuna ekleyiniz
let sonuc3 = dizi1.push("kiraz");

//dizi1[dizi1.lenght]="kiraz";  diye de yazılabilir.


//6- dizinin son iki elemanını siliniz
let sonuc4 = dizi1.splice((dizi1.length-2),2);

//dizi1.pop();   ----dzinin son elemanını siler
//dizi1.pop(); diye de yazılabilir.

//7- aşağıdaki bilgileri dizi içinde saklayınız

// Öğrenci 1: yiğit bilgi 2010 (70,60,80)
// Öğrenci 2: ada bilgi 2012 (80,80,90)
// Öğrenci 3: ahmet turan 2009 (60,60,70)
let ogr1 = ["Yiğit Bilgi",2010,[70,60,80]];
let ogr2 = ["Ada Bilgi",2012,[80,80,90]];
let ogr3 = ["Ahmet Turan",2009,[60,60,70]];

let simdi = new Date();
let yıl = simdi.getFullYear();
let ogryas1 = yıl - ogr1[1];
let ogryas2 = yıl - ogr2[1];
let ogryas3 = yıl - ogr3[1];

let ogrort1 = (ogr1[2][0]+ogr1[2][1]+ogr1[2][2])/3;
let ogrort2 = (ogr2[2][0]+ogr2[2][1]+ogr2[2][2])/3;
let ogrort3 = (ogr3[2][0]+ogr3[2][1]+ogr3[2][2])/3;
console.log(ogrort1.toFixed(1),ogrort2.toFixed(1),ogrort3.toFixed(1));

console.log(ogryas1,ogryas2.toFixed(1),ogryas3.toFixed(1));

console.log(ogr1);
console.log(ogr2);
console.log(ogr3);
console.log(dizi1);