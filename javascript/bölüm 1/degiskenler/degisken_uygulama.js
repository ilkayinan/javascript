let ogr1_ad="ada";
let ogr1_soyad="bilgi";

let ogr2_ad="yiğit";
let ogr2_soyad="bilgi";

let ogr1_dogumTarihi="2012";
let ogr2_dogumTarihi="2010";

let ogr_1mat1=70;
let ogr_1mat2=70;
let ogr_1mat3=80;

let ogr_2mat1=40;
let ogr_2mat2=40;
let ogr_2mat3=50;

let ogr1_ortalama= (ogr_1mat1+ogr_1mat2+ogr_1mat3)/3
let ogr2_ortalama= (ogr_2mat1+ogr_2mat2+ogr_2mat3)/3

let suankiYil = new Date().getFullYear();
let ogr_1yas= suankiYil -parseInt(ogr1_dogumTarihi);
let ogr_2yas= suankiYil -parseInt(ogr2_dogumTarihi);
console.log(ogr_1yas);
console.log(ogr_2yas);
console.log(parseInt(ogr1_ortalama));
console.log(parseInt(ogr2_ortalama));


console.log(ogr1_ortalama>=50);
console.log(ogr2_ortalama>=50);