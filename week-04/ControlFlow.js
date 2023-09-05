// percabangan ada 2 : IF ELSE dan SWITCH CASE
// IF ELSE: berupa kondisi yang menghasilkan satu nilai pada kondisi yang dievaluasi (true/false)

// IF ELSE
const IPK = 3.5;
if (IPK >= 3.5 && IPK <= 4) {
  console.log("CUMLAUDE");
} else if (IPK >= 3 && IPK < 3.5) {
  console.log("BAIK");
} else if (IPK >= 2.5 && IPK < 3) {
  console.log("CUKUP");
} else {
  console.log("WAJIB PERBAIKAN NILAI");
}

// // SWITCH CASE
const TRANSLATE = 3;
switch (TRANSLATE) {
  case 1:
    console.log("SATU");
    break;
  case 2:
    console.log("DUA");
    break;
  case 3:
    console.log("TIGA");
    break;
  default:
    console.log("tidak ada pilihan");
    break;
}

// study case
function nilaiRandom() {
  let nilaiRandom = [];
  for (let i = 0; i < 10; i++) {
    const acakNilai = Math.floor(Math.random() * 20) + 1;
    nilaiRandom.push(acakNilai);
  }
  return nilaiRandom;
}

function countMIN(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function countMAX(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > min) {
      min = arr[i];
    }
  }
  return min;
}

function countTOTAL(arr) {
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function countAVG(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let total = countTOTAL(arr);

  return Math.floor(total / arr.length);
}

const nilai = nilaiRandom();
console.log(nilai);

const cekMIN = countMIN(nilai);
console.log("Nilai min:", cekMIN);

const cekMAX = countMAX(nilai);
console.log("Nilai max:", cekMAX);

const cekTOTAL = countTOTAL(nilai);
console.log("Nilai total:", cekTOTAL);

const cekAVG = countAVG(nilai);
console.log("Nilai rata-rata:", cekAVG);
