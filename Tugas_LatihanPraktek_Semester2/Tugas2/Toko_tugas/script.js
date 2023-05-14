// Elemen-elemen dari form input
const nameInput = document.getElementById("name");
const phoneSelect = document.getElementById("phone");
const quantityInput = document.getElementById("quantity");
const memberCheckbox = document.getElementById("member");

// Elemen-elemen untuk menampilkan ringkasan pembelian
const jenisHpElement = document.getElementById("ringkasanJenisHp");
const hargaElement = document.getElementById("ringkasanHarga");
const jumlahBarangElement = document.getElementById("ringkasanJumlahBarang");
const potonganHargaElement = document.getElementById("ringkasanPotonganHarga");
const totalHargaElement = document.getElementById("ringkasanTotalHarga");

// Mendefinisikan harga untuk setiap jenis HP
const hargaHp = {
  samsung: 4399000,
  xiaomi: 4780000,
  oppo: 4200000,
  realme: 3200000,
  vivo: 4499000,
};

// Mendefinisikan harga diskon untuk member
const diskonMember = 0.1;

// Fungsi untuk menghitung harga total
function calculatePrice(event) {
  event.preventDefault();
  // Mendapatkan nilai input dari form
  const namaPelanggan = nameInput.value;
  const jenisHp = phoneSelect.value;
  const jumlahBarang = parseInt(quantityInput.value);
  const isMember = memberCheckbox.checked;

  // Menghitung harga total
  const hargaBarang = hargaHp[jenisHp] * jumlahBarang;
  let potonganHarga = 0;
  if (isMember) {
    potonganHarga = hargaBarang * diskonMember;
  }
  const totalHarga = hargaBarang - potonganHarga;

  // Menampilkan ringkasan pembelian
  jenisHpElement.textContent = jenisHp.toUpperCase();
  hargaElement.textContent = "Rp " + hargaBarang.toLocaleString();
  jumlahBarangElement.textContent = jumlahBarang;
  potonganHargaElement.textContent = "Rp " + potonganHarga.toLocaleString();
  totalHargaElement.textContent = "Rp " + totalHarga.toLocaleString();
}

// Fungsi untuk mereset form
function resetForm(event) {
  event.preventDefault();
  nameInput.value = "";
  phoneSelect.value = "";
  quantityInput.value = "";
  memberCheckbox.checked = false;

  // Menghapus ringkasan pembelian
  jenisHpElement.textContent = "";
  hargaElement.textContent = "";
  jumlahBarangElement.textContent = "";
  potonganHargaElement.textContent = "";
  totalHargaElement.textContent = "";
}

// Menambahkan fungsi untuk tombol "Hitung" dan "Reset"
const calculateButton = document.querySelector(".btn");
const resetButton = document.querySelector(".btn-reset");
calculateButton.addEventListener("click", calculatePrice);
resetButton.addEventListener("click", resetForm);
