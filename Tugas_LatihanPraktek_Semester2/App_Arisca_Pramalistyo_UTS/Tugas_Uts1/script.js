function hitungNilai() {
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const matkul = document.getElementById("matkul").value;
    const uts = parseFloat(document.getElementById("uts").value);
    const uas = parseFloat(document.getElementById("uas").value);
    const tugas = parseFloat(document.getElementById("tugas").value);
  
    const nilaiAkhir = (uts + uas + tugas) / 3;
  
    let nilaiHuruf;
    let indeksNilai;
  
    if (nilaiAkhir >= 85) {
      nilaiHuruf = "A";
      indeksNilai = 4.0;
    } else if (nilaiAkhir >= 79) {
      nilaiHuruf = "A-";
      indeksNilai = 3.67;
    } else if (nilaiAkhir >= 74) {
      nilaiHuruf = "B+";
      indeksNilai = 3.33;
    } else if (nilaiAkhir >= 69) {
      nilaiHuruf = "B";
      indeksNilai = 3.0;
    } else if (nilaiAkhir >= 64) {
      nilaiHuruf = "B-";
      indeksNilai = 2.67;
    } else if (nilaiAkhir >= 59) {
      nilaiHuruf = "C+";
      indeksNilai = 2.33;
    } else if (nilaiAkhir >= 54) {
      nilaiHuruf = "C";
      indeksNilai = 2.0;
    } else if (nilaiAkhir >= 41) {
      nilaiHuruf = "D";
      indeksNilai = 1.0;
    } else {
      nilaiHuruf = "E";
      indeksNilai = 0.0;
    }
  
    document.getElementById("outputNama").textContent = nama;
    document.getElementById("outputNim").textContent = nim;
    document.getElementById("outputMatkul").textContent = matkul;
    document.getElementById("outputUts").textContent = uts;
    document.getElementById("outputUas").textContent = uas;
    document.getElementById("outputTugas").textContent = tugas;
    document.getElementById("outputAkhir").textContent = nilaiAkhir.toFixed(2);
    document.getElementById("outputNilaiHuruf").textContent = nilaiHuruf;
    document.getElementById("outputIndeksNilai").textContent = indeksNilai.toFixed(2);
  }
  
  function resetForm() {
    document.getElementById("nilaiForm").reset();
    document.getElementById("outputNama").textContent = "";
    document.getElementById("outputNim").textContent = "";
    document.getElementById("outputMatkul").textContent = "";
    document.getElementById("outputUts").textContent = "";
    document.getElementById("outputUas").textContent = "";
    document.getElementById("outputTugas").textContent = "";
    document.getElementById("outputAkhir").textContent = "";
    document.getElementById("outputNilaiHuruf").textContent = "";
    document.getElementById("outputIndeksNilai").textContent = "";
  }

  // botton tugas
  function loadTugasUts2() {
    window.location.href = "../Tugas_Uts2/index.html";
  }
  
  function loadTugasUts3() {
    window.location.href = "../Tugas_Uts3/index.html";
  }
  