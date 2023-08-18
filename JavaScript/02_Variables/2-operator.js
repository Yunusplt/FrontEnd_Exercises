//!################ MATHEMATIK############################
const sucuk =50
const cola  = 100
const peynir = 150 

let toplam = sucuk+cola+peynir
console.log(toplam);
toplam ++                   //! bir arttirma 
console.log(toplam);

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar (truncdan farki eksili sayilarda ortaya cikar.)
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.


//!################ String Concatenation ################
const firstName = "Yunus"
const lastName = "Polat"
const fullName = firstName + lastName
console.log(fullName);
console.log(`My Name is ${firstName} ${lastName}`);




// * =======================================================
// *                 MOD ALMA
// * =======================================================

const number=456;

const birler=number%10
console.log(birler);        // 6

const onlar=Math.trunc(number/10)%10
console.log(onlar);         // 5

const yüzler=Math.floor(number/100)

console.log(yüzler);        // 4

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi1 = 4;

console.log(sayi1==4); //true
console.log(sayi1===4); // true
console.log(sayi1=="4"); // true
console.log(sayi1==="4"); //false

console.log(sayi1!=4); //false
console.log(sayi1!="4");// false

console.log(sayi1>4); // false
console.log(sayi1<=4); //true




// * =======================================================
// *                 TIP DÖNUSUMLERI
// * =======================================================


const para = Number("1000") + Number("900")
console.log(para);
console.log(typeof para);   // number

console.log(Number("")); //hiclik sayiya döndürülür ise 0 degerini alir

console.log(Number(null));  // 0

console.log(Number(true));   // 1

console.log(Number(false));    // 0




// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================


//? TRUE
console.log(Boolean(5));  //true
console.log(Boolean(-5));  //true
console.log(Boolean(-15.5));   //true

//? 5 falsy
console.log(Boolean(0));  //false
console.log(Boolean(null));   //false
console.log(Boolean(""));   //false
console.log(Boolean(undefined));   //false
console.log(Boolean(NaN));   //false


const v1=false || 0 || 12.6 || true || false || null
console.log(v1);  // 12.6

const v2= false || 0 || null || undefined || NaN
console.log(v2);   // NaN

const v3=5 && true && true && 0 && ""
console.log(v3);    // 0
console.log(Boolean(v3));  // false

const v4=6 && true && 12.5 && 7 
console.log(v4);   // 7

console.log(!v4);  // false
console.log(!v2);  // True




console.log(Number("0x11")); // 17 x=hexa=16





console.log(Number("0b101")); // 5 b=binary 2lik taban






console.log(Number("0o11")); // 9 o=octal=8







console.log(Number("sayi"));     //NAN

