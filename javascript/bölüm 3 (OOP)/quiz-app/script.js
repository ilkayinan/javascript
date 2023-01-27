// OOP: nesne tabanşı programlama
// object

// let soru1 = {
//     soruMetni:"Hangisi javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri:{
//         a:"Node.js",
//         b:"Typescript",
//         c:"Npm"
//     },
//     dogruCevap:"c",
//     cevabiKontrolEt: function(cevap){
//         return cevap===this.dogruCevap

//     }
// }

// let soru2 = {
//     soruMetni:"Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri:{
//         a:"Node.js",
//         b:"Nuget",
//         c:"Npm"
//     },
//     dogruCevap:"b",
//     cevabiKontrolEt: function(cevap){
//         return cevap===this.dogruCevap

//     }
// }


//Sınıf, Constructor => nesne * 30
//ES5, ES6, ES7
// constructor ES5 versiyonunda, ES6 da sınıflar (class) var yerine ancak tarayıcılar ES5 i kesin tanıdığı için ES6 ve ES7 ES5 e çevrilip yüklenir. 

function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
            
}

Soru.prototype.cevabiKontrolEt= function(cevap){
    return cevap === this.dogruCevap;       
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?",
    {
    a:"Node.js",
    b:"Typescript",
    c:"Npm",
    d:"Nuget"
    },
    "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulamasıdır?",
    {
    a:"Node.js",
    b:"Typescript",
    c:"Npm"
    },"c"),
    new Soru("3-Hangisi javascript paket yönetim uygulamasıdır?",
    {
    a:"Node.js",
    b:"Typescript",
    c:"Npm"
    },"c"),
    new Soru("4-Hangisi javascript paket yönetim uygulamasıdır?",
    {
    a:"Node.js",
    b:"Typescript",
    c:"Npm"
    },"c"),
];

function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
}
Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}
const quiz =new Quiz(sorular);

document.querySelector(".btn_start").addEventListener("click", function(){
    
        document.querySelector(".quiz_box").classList.add("active");
        soruGoster(quiz.soruGetir());
    

})
document.querySelector(".next_btn").addEventListener("click", function(){
    if (quiz.sorular.length!=quiz.soruIndex + 1){
        quiz.soruIndex += 1;
        soruGoster(quiz.soruGetir());
    }else{
        console.log("quiz bitti");
    }
});

const option_list = document.querySelector(".option_list");


function soruGoster(soru){
    let question =`<span>${soru.soruMetni}</span>`;
    let options ='';
    for(let cevap in soru.cevapSecenekleri){
        options +=
        `
        <div class="option">
        <span><b>${soru.cevapSecenekleri[cevap]}<b/><span/>
        </div>
        `;
    }
    const option_list = document.querySelector(".option_list");
    document.querySelector(".question_text").innerHTML = question;
   option_list.innerHTML = options;

   const option = option_list.querySelectorAll(".option");
   for(let opt of option){
        opt.setAttribute("onclick", "optionSelected(this)");
   }
}
    function optionSelected(option){
        let cevap = option.querySelector("span b").textContent;
        let soru = quiz.soruGetir();
        if(soru.cevabiKontrolEt(cevap)){
            option.classList.add("correct");
        } else {
            option.classList.add("incorrect");
        }

        for(let i=0; i<option_list.children.length; i++){
            option_list.children(i).classList.add("disabled");
        }
    }

// console.log(sorular[0].soruMetni);

// for(let s of sorular){
//     console.log(s.soruMetni);
// }
// console.log(soru1.soruMetni);
// console.log(soru1.cevapSecenekleri);
// console.log(soru1.dogruCevap);
// console.log(soru1.cevabiKontrolEt("c"));
// console.log(soru2.soruMetni);
// console.log(soru2.cevapSecenekleri);
// console.log(soru2.dogruCevap);
// console.log(soru2.cevabiKontrolEt("c"));

// console.log(soru1.dogruCevap);

// console.log(soru2.soruMetni);
// console.log(soru2.cevapSecenekleri);
// console.log(soru2.dogruCevap);
