let sayilar = [1,5,8,15,6,25];
// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.

for (let i=0;i<sayilar.length;i++){
    let sayi= sayilar[i]*sayilar[i];
    console.log (sayi);
}
// 2- sayilar listesindeki hangi sayılar 5' in katıdır?

for(i=0;i<sayilar.length;i++){
    if(sayilar[i] %5 ==0){
        console.log(sayilar[i]);
    }
}
// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let toplam=0;
for(let sayi of sayilar){
    if (sayi %2 ==0){
        toplam += sayi;
    }
}
console.log(toplam);
// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

for(let urun of urunler){
  let buyuk= urun.toUpperCase();
    console.log(buyuk);
}

// 5- urunler listesinde samsung geçen kaç ürün vardır?

let adet=0
for(urun1 of urunler){
    if (urun1.includes("samsung")){
        adet++;
    }
}
console.log(adet);


// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

let ogrenciler = [
    {"ad":"yiğit", "soyad": "bilgi", "notlar": [60,70,60]},
    {"ad":"ada", "soyad": "bilgi", "notlar": [80,70,80]},
    {"ad":"çınar", "soyad": "turan", "notlar": [10,20,60]}
];

for (let ogrenci of ogrenciler){
    let not_toplam=0;
    let ortalama=0;
    let adet1 =0;
    for(let not of ogrenci.notlar){
        not_toplam += not
        adet1++
    }
    ortalama=not_toplam/adet;
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin ortalaması= ${ortalama}`);
    if(ortalama>= 50){
        console.log("ogrenci basarılı");
    }
    else{
        console.log("ogrenci basarısız");
    }

}
// tüm öğrencilerin not ortalaması kaçtır?

let ogrenci_ortalamalar =[];

for(let ogrenci of ogrenciler){
    let not_toplam=0;
    let ortalama=0;
    let adet2=0;
    for(let not of ogrenci.notlar){
        not_toplam+=not;
        adet2++
    }
    ortalama=not_toplam/adet2;
    ogrenci_ortalamalar.push(ortalama);
}
not_toplam=0;
for(let ortalamalar of ogrenci_ortalamalar){
  not_toplam+=ortalamalar;
}
console.log(`sınıf ortalaması=${not_toplam/ogrenci_ortalamalar.length}`)



