// Data Array
var dataArray = [
  { nama: "Aditya", tahunLahir: 2004, noHp: "081234567890" },
  { nama: "Arfian", tahunLahir: 2003, noHp: "082345678901" },
  { nama: "Febriana", tahunLahir: 2004, noHp: "083456789012" },
];

// Fungsi untuk menampilkan data array
function displayData() {
  var dataList = document.getElementById("data-list");
  dataList.innerHTML = "";

  for (var i = 0; i < dataArray.length; i++) {
    var dataItem = document.createElement("li");
    dataItem.innerText =
      "Nama: " +
      dataArray[i].nama +
      ", Tahun Lahir: " +
      dataArray[i].tahunLahir +
      ", No HP: " +
      dataArray[i].noHp;
    dataList.appendChild(dataItem);
  }
}

// Function untuk sort data
function sortData() {
  dataArray.sort(function (a, b) {
    return a.nama.localeCompare(b.nama);
  });
  displayData();
}

// Function untuk add data
function addData() {
  var namaInput = document.getElementById("namaInput").value;
  var tahunInput = document.getElementById("tahunInput").value;
  var noHpInput = document.getElementById("noHpInput").value;

  var newData = {
    nama: namaInput,
    tahunLahir: parseInt(tahunInput),
    noHp: noHpInput,
  };

  dataArray.push(newData);
  displayData();

  // Reset input fields
  document.getElementById("namaInput").value = "";
  document.getElementById("tahunInput").value = "";
  document.getElementById("noHpInput").value = "";
}

// Function untuk menghapus data pertama
function removeFirstData() {
  dataArray.shift();
  displayData();
}

// Initial display
displayData();

// Button tugas
function loadTugas1_Nilai() {
  window.location.href = "../Tugas_Uts1/index.html";
}

function loadTugas3_Profil() {
  window.location.href = "../Tugas_Uts3/index.html";
}
