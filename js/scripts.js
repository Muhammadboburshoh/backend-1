/* //GlobalScope - kodning hammaga ko'rinib turgan qismi

console.log("global");
const PI = 3.14;

{
  console.log("local 1");
  const PI = 0;
  // const PI = 0; SentaxError
  //localScope - har bir xona localScope deyiladi
}

console.log(PI);

//------------

let lang = "en";

{
  console.log(lang)
  
  let lang = "uz"

  console.log();
}

console.log(lang);

var abdurahmon = "abdurahmon"

console.log(abdurahmon);


if(isOpen) {
  isOpen = "a";
}
 */

var i = 10;

const ab = function () {
  var i = 1;
  console.log(i);
}

ab();
console.log(i);









