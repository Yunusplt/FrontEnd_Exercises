//!################# DEGISKEN TANIMLAMA ###################
//??========= const ===========??
// - sadece baslangicta deger atanabilir.
// - sonradan degeri degistirilemez (non-primitive'ler haric(arrays,objects,functions,classes,lists))
// - baslangicta deger vermek zorunlu.
// - tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)

const yas = 25;
console.log(yas);
console.log(typeof yas);


//??========= let ===========??
// - sonradan degeri degistirilebilir
// - tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)

let dil="JavaScript";
console.log(dil);                   //JavaScript
dil="java";
console.log(dil);                   //java

let sayi1="5";
console.log(7+sayi1);               //75  bu pythonda hata verir.. weil ein nummer und ein string kann man nicht rechnen.


//??========= var ===========??
// - sonradan degeri degistirilebilir
// - variable type yazilmaz ise. default olarak var olarak algilanir.
// - heryerden erisilebilir. 

var sayi2 = 5
sayi2 = 10
console.log(sayi2)                // 10
// todo XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX