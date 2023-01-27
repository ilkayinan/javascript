// let toplam = 0;

// for (let i=0;i<=10; i++){
//    //kod
//    console.log("merhaba");
// }

// for (let i=1;i<=10; i++){
//     toplam +=i;
//  }
//  console.log(toplam);

 let sayilar =[1,4,5,8,3,4];

//  console.log(sayilar[0]+sayilar[1]+sayilar[2]+sayilar[3]+sayilar[4]+sayilar[5]);

let toplam=0;
// for (let i=0; i<sayilar.length; i++){
//     toplam +=sayilar[i];
// }

// for(let i in sayilar){
//     toplam+=sayilar[i];
// }

for(let sayi of sayilar){
    toplam += sayi;
    // console.log(sayi);
}
console.log(toplam);

let user = {
    "name":"ilkay inan",
    "username":"ilkyinn",
    "password":"12345",
    "email":"ilkyinn@gmail.com"
};

for(let key in user){
    console.log(key);
    console.log(user[key]);
}