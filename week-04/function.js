// function terdiri dari 2 jenis yaitu arrow dan standart function

// function standart
function person(nama) {
  console.log("Nama saya:", nama);
}

person("rangga");

// function standart return value
function multyple(a, b) {
  return a * b;
}

const value = multyple(12, 20);
console.log(value);

function nilaiDefault(a, b, c = 4) {
  return a + b + c;
}

console.log(nilaiDefault(1, 1));

// arrow function
const multyple1 = (a, b) => a * b;

console.log(multyple1(2, 3));
