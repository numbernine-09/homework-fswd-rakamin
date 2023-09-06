// fungsi untuk membuat nilai random 1-50 dengan 100 elemen array
const randomNilai = () => {
  let arrNilaiRandom = [];

  for (let i = 0; i < 100; i++) {
    let nilai = Math.floor(Math.random() * 50) + 1;
    arrNilaiRandom.push(nilai);
  }

  return arrNilaiRandom;
};

// fungsi untuk memisahkan array elemen genap dan ganjil
const separate = (arr) => {
  let arrGenap = [];
  let arrGanjil = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arrGenap.push(arr[i]);
    } else {
      arrGanjil.push(arr[i]);
    }
  }

  return [arrGenap, arrGanjil];
};

// fungsi untuk mencari nilai elemen terkecil
const findMin = (arr) => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

// fungsi untuk mencari nilai elemen terbesar
const findMax = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

// fungsi untuk mencari nilai total elemen
const findTotal = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

// fungsi untuk mencari nilai rata-rata elemen
const findAverage = (arr) => {
  let total = findTotal(arr);

  return Math.floor(total / arr.length);
};

// fungsi untuk membadingkan nilai pada array genap dan ganjil
const compare = (genap, ganjil) =>
  genap > ganjil
    ? "Lebih besar di Array Genap"
    : genap < ganjil
    ? "Lebih besar di Array ganjil"
    : "Kedua Array memiliki nilai sama";

// fungsi utama untuk menampilkan sebuah hasil
const main = (arrGenap, arrGanjil, arr) => {
  const minGenap = findMin(arrGenap);
  const maxGenap = findMax(arrGenap);
  const minGanjil = findMin(arrGanjil);
  const maxGanjil = findMax(arrGanjil);
  const totalGenap = findTotal(arrGenap);
  const totalGanjil = findTotal(arrGanjil);
  const averageGenap = findAverage(arrGenap);
  const averageGanjil = findAverage(arrGanjil);

  console.log("Array dengan jumlah index 100:", arr);
  console.log("");
  console.log("Array genap dengan jumlah index 50:", arrGenap);
  console.log("");
  console.log("Array ganjil dengan jumlah index 50:", arrGanjil);
  console.log("");

  console.log(
    "================================================================\n"
  );

  console.log("Mencari nilai min, max, total, dan rata rata:\n");
  console.log("nilai min arr genap:", minGenap);
  console.log("nilai max arr genap:", maxGenap);
  console.log("nilai min arr ganjil:", minGanjil);
  console.log("nilai max arr ganjil:", maxGanjil);
  console.log("nilai total arr genap:", totalGenap);
  console.log("nilai total arr ganjil:", totalGanjil);
  console.log("nilai rata² arr genap:", averageGenap);
  console.log("nilai rata² arr ganjil:", averageGanjil);
  console.log("");

  console.log(
    "================================================================\n"
  );

  console.log("Perbandingan nilai antara Array Genap dan Ganjil:\n");
  console.log("nilai min:", compare(minGenap, minGanjil));
  console.log("nilai max:", compare(maxGenap, maxGanjil));
  console.log("nilai total:", compare(totalGenap, totalGanjil));
  console.log("nilai rata-rata:", compare(averageGenap, averageGanjil));
};

// melakukan pemanggilan pada fungsi dan memasukkan array pada variabel nilai
const nilai = randomNilai();

// melakukan destructuring  untuk mengambil nilai array genap dan ganjil
const [arrGenap, arrGanjil] = separate(nilai);

// memasukan nilai array genap, ganjil, dan array nilai random
main(arrGenap, arrGanjil, nilai);
