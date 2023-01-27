let ad = "ilkay";
let soyad = "inan";
let yas = "35";
let sehir ="izmir";

// let mesaj="Benim adım "+ ad + " ve soyadım " + soyad +". "+ sehir+"'de yaşıyorum. " + "Emekliliğe "+(65-yas)+" yılım kaldı.";

//backtick
mesaj= `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${(60-yas)} sene kaldı.`;

//ternary operators
let emeklilik = (65-yas>0)? "emekliliğe "+(65-yas)+ " yıl kaldı":" zaten emekli oldum";
mesaj= `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. ${emeklilik}`;
console.log(mesaj);