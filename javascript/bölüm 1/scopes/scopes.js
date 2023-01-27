var isim="ahmet"; //global scope
const adres="istanbul"; //uygulama boyunca değer değişmez.

adres = "kocaeli";

function yazdir(){  //fonksiyon önce kendi içinde değişkeni arar.bılamazsa globallere bakar.
    var isim ="ayşe";
    var yas =20;
    console.log(isim,yas);

}



if (true){  
    let cinsiyet= "kadın";
    let isim="zeynep";
    console.log(isim,cinsiyet);
}
console.log(isim,cinsiyet); //console sadece globale bakar.
yazdir();

//fonksiyonlar kendi scope alanlarını oluşturur
//for if gibi blokların içinde yeni bir scope oluşmaz. global gibi çalışır.(let,const)
