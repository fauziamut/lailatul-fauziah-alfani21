let dataString2 = "data string";
console.log(dataString2);

//1.escaping string (\' \" \\ \n \t \r \b \f )
let data1 = 'monyet berkata" "apa kabar?"';
console.log(data1);
let data2 = "musang berkata  \"tetap asyikk\"";
console.log(data2);
let data3 = "monyet bermain dengan musang";
console.log(data3); 

//2. literal string (templat literal string)
let namaDepan = "monyet";
let namaBelakang ="nyet";
let umur = 7;
let namaLengkap = namaDepan +" "+namaBelakang +" "+umur;
console.log(namaLengkap);

// lebih elehan supaya ini tidak bikin eror
let biodata3 = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata3);