// bir sayının 10 ile 50 arasında olup almadığını kontrol et
let sayi1=10;
if(sayi1>10 && sayi1<50){
    console.log("sayi 10 ile 50 arasındadır");
}
else {
    console.log("Sayi 10 ile 50 arasında değildir")
}

// bir sayının pozitif ya da tek sayı olup olmadığını okntrol et

let sayi2= -21;
if(Math.abs(sayi2 % 2) ==1 || sayi2>0) {
    console.log("sayi tek veya pozitiftir")
}
else {
    console.log("sayi kurala uygun değildir");
}


//x,y,z sayılarının büyüklük karşılaştırmasını yapınız.

let x=20;
let y=20;
let z=30;

if (x>y && x>z){
    console.log("x en büyük")
}
else if (y>x && y>z){
    console.log("y en büyük")
}
else if (z>x && z>y){
    console.log("z en büyük")
} else {
    console.log("sayılar eşit");
}

//2 vize (40%) bir final (60%) notuna göre hesaplanan ortalama için;
//a-eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
//b-geçmek için ortalama 50 olsa bile final notu en az 50 olmalıdır
//c-Finalden 70 alındaığında ortalama 50'nin altında olsa bile dersten geçilsin.

let vize1=10;
let vize2=10;
let final=70;

let ortalama =((vize1+vize2)*0.2)+(final*0.6);

console.log("ortalamanız: "+ortalama);
// a-
// if(ortalama>=50){
//     console.log("geçtiniz.");
// }
// else{
//     console.log("kaldınız.")
// }

// b-

//  if(ortalama>=50 && final>=50){
//     console.log("geçtiniz.");
//  }
//  else{
//      console.log("kaldınız.")
// }

//c-
if(ortalama>=50 || final>=70){
    console.log("geçtiniz.");
 }
 else{
     console.log("kaldınız.")
}