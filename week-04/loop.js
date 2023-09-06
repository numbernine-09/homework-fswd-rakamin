// perulangan ada 3 jenis : for, while dan do while
// hal yang harus diperhatikan :
// - inisialisasi : nilai awal
// - aksi : sesuatu tindakan untuk menuju ke kondisi akhir
// - kondisi : kondisi untuk berhenti dari perulangan
// for dibagi menjadi beberapa :
// for basic
// for in : mencetak index
// for of : mencetak element
// while dibagi menjadi 2
// while : kondisi diawal
// do while : kondisi diakhir, akan melakukan perulangan sebanyak satu kali.

// for basic
for (let i = 0; i < 5; i++) {
  console.log("for:", i);
}

// // do while
let index = 0;
do {
  console.log("do while:", index);
  index++;
} while (index < 5);

// // while
index = 0;
while (index < 5) {
  console.log("while:", index);
  index++;
}

// *****
// ****
// ***
// **
// *

let number = 5;
for (let i = number; i >= 0; i--) {
  let stars = " ";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}

/*
 *****
 *   *
 *   *
 *****
 */

for (let i = 0; i < number; i++) {
  let stars = "";
  for (let j = 0; j < number; j++) {
    if (i === 0 || i === number - 1 || j === 0 || j === number - 1) {
      stars += "*";
    } else {
      stars += " ";
    }
  }
  console.log(stars);
}
