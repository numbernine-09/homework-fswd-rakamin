const randomNilai = () => {
  let arrNilaiRandom = [];

  for (let i = 0; i < 100; i++) {
    let nilai = Math.floor(Math.random() * 50) + 1;
    arrNilaiRandom.push(nilai);
  }

  return arrNilaiRandom;
};

const separate = (arr) => {
  let arrGenap = [];
  let arrGanjil = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      arrGenap.push(arr[i]);
    } else {
      arrGanjil.push(arr[i]);
    }
  }

  return [arrGenap, arrGanjil];
};

const findMin = (arr) => {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

const findMax = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const findTotal = (arr) => {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
};

const findAverage = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  let total = findTotal(arr);

  return Math.floor(total / arr.length);
};

const compare = (arrGenap, arrGanjil, arr) => {
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
  console.log(
    "nilai min:",
    minGenap > minGanjil
      ? "Lebih besar di Array Genap"
      : minGenap < minGanjil
      ? "Lebih besar di Array Ganjil"
      : "Kedua Array memiliki nilai sama"
  );
  console.log(
    "nilai max:",
    maxGenap > maxGanjil
      ? "Lebih besar di Array Genap"
      : maxGenap < maxGanjil
      ? " Lebih besar di Array Ganjil"
      : "Kedua Array memiliki nilai sama"
  );
  console.log(
    "nilai total:",
    totalGenap > totalGanjil
      ? "Lebih besar di Array Genap"
      : totalGenap < totalGanjil
      ? "Lebih besar di Array Ganjil"
      : "Kedua Array memiliki nilai sama"
  );
  console.log(
    "nilai rata-rata:",
    averageGenap > averageGanjil
      ? "Lebih besar di Array Genap"
      : averageGenap < averageGanjil
      ? "Lebih besar di Array Ganjil"
      : "Kedua Array memiliki nilai sama"
  );
};

const nilai = randomNilai();

const [arrGenap, arrGanjil] = separate(nilai);

compare(arrGenap, arrGanjil, nilai);
