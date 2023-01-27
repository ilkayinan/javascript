let sonuc;

sonuc = 10;
sonuc = "10";

sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseFloat("10a");
sonuc = parseFloat("a10");

sonuc = isNaN ("10a"); // sayısal bir değer mi diye soruyoruz true/false

let sayi = 10.18615316;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.6); // en yakın tam sayıya yuvarlak
sonuc = Math.ceil(2.2); //hep yukarı yuvarlar
sonuc = Math.floor(2.8); // hep aşağı yuvarlar
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);
sonuc = Math.min(4,6,8,13);
sonuc = Math.max(4,6,8,13);
sonuc = Math.floor(Math.random()*100)+50;

console.log(typeof sonuc);
console.log(sonuc);