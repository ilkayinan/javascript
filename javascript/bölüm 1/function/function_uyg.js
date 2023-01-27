// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelimeYazdir(kelime,sayi){
    for(let i=0; i<sayi;i++){
        console.log(kelime);
    }
}
kelimeYazdir("ilkay",3);
// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function alanCevreHesapla(en,boy){
    let alan = en*boy;
    let cevre = 2*(en+boy);
    console.log(`dikdörtgenin çevresi= ${cevre}`);
    console.log(`dikdörtgenin alanı= ${alan}`);
}

alanCevreHesapla(5,6);


// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yazitura(){
    let random = Math.random();
    if (random>0.5){
        console.log("yazi");
    }else{
        console.log("tura");
    }
    }
    yazitura();
    yazitura();
    yazitura();
    yazitura();




// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tambolenler(sayi){
    let sayilar =[];
        for (let i=0;i<=sayi;i++){
            if(sayi%i==0){
                console.log(i);
            }
        }
    return sayilar;
}

tambolenler(10);//2,5
tambolenler(15);//3,5


// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam(){
    let sonuc=0;
    for (let i=0;i<arguments.length;i++){
        sonuc +=arguments[i];
    }
    return sonuc;
}
console.log( toplam(2,5));
console.log( toplam(2,5,7));