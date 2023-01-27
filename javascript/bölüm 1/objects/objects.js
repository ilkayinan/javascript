//dict, json

let userA ={
    "name":"ilkay",
    "last":"inan",
    "yas":"36",
    "adres":{
        "sehir":"izmir",
        "ilce":"bornova"
    },
    "hobiler": ["sinema","spor"]
}

let userB ={
    "name":"burçin",
    "last":"tosun",
    "yas":"35",
    "adres":{
        "sehir":"denizli",
        "ilce":"at"
    },
    "hobiler": ["koşu","bisiklet"]
}
let sonuc;
let sonuc1;
let sonuc2;
let sonuc3;
let sonuc4;
let sonuc5;
let users = [
    userA,
    userB
];
sonuc4 = users[1].name;



sonuc = userA.name;
sonuc = userA.last;
sonuc= userA["adres"]
sonuc1 =userA.adres.sehir;
sonuc = userA.adres.ilce;
sonuc2 = userA.hobiler[0];
sonuc3 = userA.hobiler[1];


let urunler = [
    {
        "urun_adi":"samsung s22",
        "urun_fiyat":13000
    },
    {
        "urun_adi":"samsung s23",
        "urun_fiyat":15000
    }
]
sonuc5 = urunler[0].urun_adi;


console.log(sonuc1);
console.log(sonuc);
console.log(sonuc2);
console.log(sonuc3);
console.log(sonuc4);
console.log(sonuc5);