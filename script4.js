//ini adalah komen,bebas

//1.variabel dengan let
let nama = "zimyutt cekali";

//tampilkan data
console.log(nama);

//kita ubah nilai variabel
nama = "atta halilintar";
console.log(nama);

//2.variabel dengan var
var namaDepan = "zimyutt";
console.log(namaDepan);
namaDepan = "atta";
console.log(namaDepan);

//kelakuan dari var
let namaBelakang = "cekali";
{
  let namaBelakang = "halilintar";
  console.log(namaBelakang);
}
console.log(namaBelakang);

//kelakuan dari var
var namaTengah = "lucu";
{
    var namaTengah = "SOGEH";
    console.log(namaTengah);
}
console.log(namaTengah);

//kasus khusus
bakso = "beracun";
{
    bakso = "beracun";
}
console.log(bakso);

//3.const

const TTL = "11 april 1999";
console.log(TTL);