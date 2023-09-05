// // array adalah sekumpulan data yang memiliki tipe data yang sama yaitu array
// const fruits = ["grape", "banana", "orange", "apple", "jack"];

// // for in implements : index
// for (key in fruits) {
//   console.log("for in: ", key);
// }

// // for of implements : element
// for (val of fruits) {
//   console.log("for of: ", val);
// }

// // object merupakan data yang memilki key berupa string sebagai index
// const datas = {
//   nama: "rangga",
//   umur: 21,
//   alamat: "blitar",
// };

// for (key in datas) {
//   console.log(datas[key]);
// }

// game

const nilaiCari = Math.floor(Math.random() * 10);

let iterasi = 0;
for (let i = 0; i < Infinity; i++) {
  let nilaitebak = Math.floor(Math.random() * 10);
  if (nilaitebak === nilaiCari) {
    iterasi += i;
    console.log("nilai sama ditemukan:" + " " + nilaitebak + " " + nilaiCari);
    console.log("pada iterasi ke-" + iterasi);
    break;
  }
}
