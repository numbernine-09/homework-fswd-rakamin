//  kelas abstrak yang mengatur validasi input
class FormValidator {
  constructor(inputElement, errorMessage, alertError, alertWrap) {
    this.inputElement = inputElement;
    this.errorMessage = errorMessage;
    this.alertError = alertError;
    this.alertWrap = alertWrap;
    this.inputElement.addEventListener("change", () => this.validate());
  }

  // method abstrak yang akan diimplementasi oleh kelas anak
  validate() {
    throw new Error("method ini belum diimplementasi");
  }

  // method  yang akan diimplementasi oleh kelas anak
  displayError() {
    // alert(this.errorMessage);
    this.alertError.innerHTML = this.errorMessage;
    this.alertWrap.setAttribute("style", "display:flex;");
    setTimeout(() => {
      this.alertWrap.setAttribute("style", "display:none;");
    }, 1500);
    this.inputElement.value = "";
  }
}

// Kelas anak untuk validasi inputan nama
class NameValidator extends FormValidator {
  constructor(inputElement, alertError, alertWrap) {
    super(
      inputElement,
      "nama minimal adalah 10 karakter",
      alertError,
      alertWrap
    );
  }

  validate() {
    if (this.inputElement.value.length < 10) {
      this.displayError();
    }
  }
}

// Kelas anak untuk validasi inputan umur
class UmurValidator extends FormValidator {
  constructor(inputElement, alertError, alertWrap) {
    super(
      inputElement,
      "umur tidak boleh kurang dari 25 tahun",
      alertError,
      alertWrap
    );
  }

  validate() {
    if (this.inputElement.value < 25) {
      this.displayError();
    }
  }
}

// Kelas anak untuk validasi inputan uang
class UangValidator extends FormValidator {
  constructor(inputElement, alertError, alertWrap) {
    super(
      inputElement,
      "inputan uang minimal adalah 100.000 dan maksimal 1.000.000",
      alertError,
      alertWrap
    );
  }

  validate() {
    if (this.inputElement.value < 100000 || this.inputElement.value > 1000000) {
      this.displayError();
    }
  }
}

// Kelas utama yang mengelola data
class DataHandler {
  constructor() {
    this.inputName = document.getElementById("nama");
    this.inputAge = document.getElementById("umur");
    this.inputMoney = document.getElementById("uang");
    this.averageAge = document.getElementById("rata-umur");
    this.averageMoney = document.getElementById("rata-uang");
    this.tbody = document.getElementById("body");
    this.loadingElement = document.getElementById("loading");
    this.alertError = document.getElementById("error-message");
    this.alertWrap = document.getElementById("alert-wrap");
    this.alerts = document.getElementById("alert");
    this.saveData = JSON.parse(localStorage.getItem("saveData")) || [];

    this.validators = [
      new NameValidator(this.inputName, this.alertError, this.alertWrap),
      new UmurValidator(this.inputAge, this.alertError, this.alertWrap),
      new UangValidator(this.inputMoney, this.alertError, this.alertWrap),
    ];

    const form = document.getElementById("form1");
    form.addEventListener("submit", (e) => this.onSubmit(e));

    const deleteAllButtoon = document.getElementById("hapus-semua-data");
    deleteAllButtoon.addEventListener("click", () => this.onDeleteAllData());

    this.tbody.addEventListener("click", (e) => this.onDeleteData(e));
  }

  // method untuk membuat efek loading
  loader(value) {
    this.loadingElement.style.display = value;
  }

  // method menampilkan alert success
  showCustomAlert(message) {
    const customAlert = document.getElementById("custom-alert");
    customAlert.textContent = message;
    this.alerts.setAttribute("style", "display:flex;");
    setTimeout(() => {
      this.alerts.setAttribute("style", "display:none;");
    }, 1500);
  }

  // method menghapus semua data
  onDeleteAllData() {
    if (confirm("Apakah Anda yakin ingin menghapus semua data?")) {
      this.saveData = [];
      localStorage.removeItem("saveData");
      this.showCustomAlert("Data berhasil dihapus!");
      this.init();
    }
  }

  // method menghapus data tunggal
  onDeleteData(e) {
    if (e.target.classList.contains("btn-delete")) {
      confirm("apakah Anda yakin ingin menghapus data ini?");
      const index = e.target.getAttribute("data-index");
      this.saveData.splice(index, 1);
      localStorage.setItem("saveData", JSON.stringify(this.saveData));
      this.init();
    }
  }

  // method untuk reset form
  resetForm() {
    this.inputName.value = "";
    this.inputMoney.value = "";
    this.inputAge.value = "";
  }

  // method untuk menangani penyimpanan data asynchronously
  async onSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.loader("block");

      const data = {
        nama: this.inputName.value,
        umur: +this.inputAge.value,
        uang: +this.inputMoney.value,
      };

      try {
        await this.saveDataAsync(data);
        this.loader("none");
        this.showCustomAlert("Data berhasil ditambahkan!");
        this.resetForm();
        this.init();
      } catch (error) {
        console.error("Simpan data error:", error);
        this.showCustomAlert("Gagal menambahkan data.");
      }
    }
  }

  // method penyimpanan data asynchronously
  async saveDataAsync(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.saveData.push(data);
        localStorage.setItem("saveData", JSON.stringify(this.saveData));
        resolve();
      }, 1000); // Simulasi pengiriman data ke server dengan penundaan 1 detik
    });
  }

  // method untuk render data pada tabel
  renderData() {
    this.tbody.innerHTML = "";
    let number = 1;
    this.saveData.forEach((data, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
              <td>${number}</td>
              <td>${data.nama}</td>
              <td>${data.umur} tahun</td>
              <td>Rp.${data.uang}</td>
              <td  ><button
              class="btn btn-active btn-sm btn-accent btn-delete"
              id="delete-data"
              data-index="${index}"
            >
              Delete
            </button></td>
        `;
      tr.classList.add("hover");
      this.tbody.appendChild(tr);
      number++;
    });
  }

  // method untuk menghitung rata umur
  calculateAverageAge() {
    const totalAge = this.saveData.reduce((acc, data) => acc + data.umur, 0);
    const averageAge = totalAge / this.saveData.length;
    this.averageAge.textContent = `${Math.floor(averageAge)} Tahun`;
    if (this.saveData.length === 0) {
      this.averageAge.textContent = "tidak ada data!";
    }
  }

  // method untuk menghitung rata uang saku
  calculateAverageAllowance() {
    const totalAllowance = this.saveData.reduce(
      (acc, data) => acc + data.uang,
      0
    );
    const averageAllowance = totalAllowance / this.saveData.length;
    this.averageMoney.textContent = `Rp.${Math.floor(averageAllowance)} `;
    if (this.saveData.length === 0) {
      this.averageMoney.textContent = "tidak ada data!";
    }
  }

  // method untuk menjanlankan seluruh method validasi pada tiap objek
  validateForm() {
    for (const validator of this.validators) {
      if (
        this.inputAge.value &&
        this.inputName.value &&
        this.inputMoney.value !== ""
      ) {
        validator.validate();
      }
    }

    return this.validators.every(
      (validator) => validator.inputElement.value !== ""
    );
  }

  // method untuk memanggil render data dan kalkulasi rata rata
  init() {
    this.renderData();
    this.calculateAverageAge();
    this.calculateAverageAllowance();
  }
}

// pembuatan objek dan pemanggilan methodnya
const dataHandler = new DataHandler();
dataHandler.init();
