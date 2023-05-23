// Array Data Mahasiswa
var mahasiswa = [
  {
    nama: "Arisca Pramalistyo",
    tahunLahir: 2004,
    noHp: "081234567890",
  },
  {
    nama: "Aditya Dwi Saputra",
    tahunLahir: 2005,
    noHp: "089876543210",
  },
  {
    nama: "Ayu Muthoharoh",
    tahunLahir: 2004,
    noHp: "087654321098",
  },
];

// Function untuk menampilkan data array dalam bentuk tabel
function showData() {
  var table = "<h2><center>Tampilan Data Array</center></h2>";
  table += "<table>";
  table +=
    "<tr><th>Nama Mahasiswa</th><th>Tahun Lahir</th><th>No Hp</th><th>Aksi</th></tr>";

  for (var i = 0; i < mahasiswa.length; i++) {
    table += "<tr>";
    table += "<td>" + mahasiswa[i].nama + "</td>";
    table += "<td>" + mahasiswa[i].tahunLahir + "</td>";
    table += "<td>" + mahasiswa[i].noHp + "</td>";
    table += '<td><button onclick="removeData(' + i + ')">Hapus</button></td>';
    table += "</tr>";
  }

  table += "</table>";
  document.getElementById("result").innerHTML = table;
}

// Function untuk menampilkan atau menyembunyikan form tambah data
function toggleForm() {
  var form = document.getElementById("dataForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

// Function untuk menampilkan atau menyembunyikan form pencarian data
function toggleSearchForm() {
  var form = document.getElementById("searchForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

// Function untuk menambah data baru ke array
function addData() {
  var nama = document.getElementById("namaInput").value;
  var tahun = document.getElementById("tahunInput").value;
  var hp = document.getElementById("hpInput").value;

  if (nama !== "" && tahun !== "" && hp !== "") {
    mahasiswa.push({
      nama: nama,
      tahunLahir: parseInt(tahun),
      noHp: hp,
    });
    document.getElementById("namaInput").value = "";
    document.getElementById("tahunInput").value = "";
    document.getElementById("hpInput").value = "";
    showData();
  }
}

// Function untuk menghapus data dari array
function removeData(index) {
  mahasiswa.splice(index, 1);
  showData();
}

// Function untuk mengurutkan data array berdasarkan tahun lahir menggunakan metode sort
function sortData() {
  mahasiswa.sort(function (a, b) {
    return a.tahunLahir - b.tahunLahir;
  });
  showData();
}

// Function untuk mencari data dalam array berdasarkan nama menggunakan metode filter
function searchData() {
  var keyword = document.getElementById("searchInput").value.toLowerCase();
  var filteredData = mahasiswa.filter(function (item) {
    return item.nama.toLowerCase().includes(keyword);
  });
  var table = '<h2>Hasil Pencarian "' + keyword + '"</h2>';
  table += "<table>";
  table +=
    "<tr><th>Nama Mahasiswa</th><th>Tahun Lahir</th><th>No Hp</th><th>Aksi</th></tr>";

  for (var i = 0; i < filteredData.length; i++) {
    table += "<tr>";
    table += "<td>" + filteredData[i].nama + "</td>";
    table += "<td>" + filteredData[i].tahunLahir + "</td>";
    table += "<td>" + filteredData[i].noHp + "</td>";
    table +=
      '<td><button onclick="removeData(' +
      mahasiswa.indexOf(filteredData[i]) +
      ')">Hapus</button></td>';
    table += "</tr>";
  }

  table += "</table>";
  document.getElementById("result").innerHTML = table;
}

// Function untuk membalik urutan data array menggunakan metode reverse
function reverseData() {
  mahasiswa.reverse();
  showData();
}
