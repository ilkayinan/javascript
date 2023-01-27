let sonuc;
let a=20, b=20, c=32;

// aritmetik operatörler
sonuc=a+b;
sonuc=a*b;
sonuc=a-b;
sonuc=a/b;
sonuc=c % a; // bölme sonucunda kalanı verir (mod)
sonuc= ++a;  // a ya 1 ekler sola yazdığımızda atama yapıp arttırır
sonuc= --a;
sonuc = a--;


// atama operatörleri
sonuc=a;
sonuc += a;  // sonuc=sonuc+a
sonuc -= a;  // sonuc=sonuc-a
sonuc *= a;  // sonuc=sonuc*a
sonuc /= a;  // sonuc=sonuc/a
sonuc %= a;  // sonuc=sonuc%a

// karşılaştırma operatörleri
sonuc = (a == b); //a b ye eşit mi?
sonuc = (a != b); //a b ye eşit değil mi?
sonuc = (3 === "3"); //tip kontrolü yapar
sonuc = (a>b); // a bden büyük mü?
sonuc = (a<=b); // a bden küçük mü?


// mantıksal operatörler

console.log(sonuc);
