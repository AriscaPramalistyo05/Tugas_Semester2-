// Get DOM elements
const namaPemainElement = document.getElementById("nama-pemain");
const papanSkorElement = document.querySelector(".papan-skor");
const virusElements = document.querySelectorAll(".virus");
const resultMessageElement = document.getElementById("result-message");
const resultScoreElement = document.getElementById("result-score");
const resultTimeElement = document.getElementById("result-time");
const resultSection = document.getElementById("result");
const resultNameElement = document.getElementById("result-name");
const pop = document.querySelector("#pop");
const resultUcapan = document.getElementById("ucapan");

// Game variables
const jumlahVirus = 3;
const kecepatanMuncul = randomWaktu(700, 750, 480);
const waktuPermainan = 15000; // 15 detik
let skor = 0;
let selesai = false;
let timer;

// Set player name
const namaPemain = prompt("Masukkan Nama Pemain:");
if (namaPemain !== null && namaPemain !== "") {
  namaPemainElement.textContent = namaPemain + " - Enjoy the game!";
} else {
  namaPemainElement.textContent = "Anda belum memasukkan nama.";
}

// Array to store used perisai indexes
const usedPerisaiIndexes = [];

// Function to generate random perisai
function randomPerisai() {
  const perisai = document.querySelectorAll(".perisai");
  let index = Math.floor(Math.random() * perisai.length);

  // Check if perisai has been used before, find a new index if so
  while (usedPerisaiIndexes.includes(index)) {
    index = Math.floor(Math.random() * perisai.length);
  }

  usedPerisaiIndexes.push(index);

  // Reset usedPerisaiIndexes array when all perisai have been used
  if (usedPerisaiIndexes.length === perisai.length) {
    usedPerisaiIndexes.length = 0;
  }

  return perisai[index];
}

// Function to generate random waktu
function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Function to handle virus click
function tangkapVirus() {
  skor += 10;
  pop.play();
  papanSkorElement.textContent = "Skor: " + skor;
  this.parentNode.classList.remove("muncul");
  if (skor >= 100) {
    stopGame("You Win!");
  }
}

// Function to stop the game
function stopGame(message) {
  selesai = true;
  clearTimeout(timer);
  resultMessageElement.textContent = message;
  resultNameElement.textContent = " Selamat : " + namaPemain;
  resultScoreElement.textContent = "Skor: " + skor;
  resultTimeElement.textContent = "Waktu: " + waktuPermainan / 1000 + " detik";
  resultUcapan.textContent = "SELAMAT PERMAINAN TELAH SELESAI";

  resultSection.style.display = "block";
  if (skor >= 100 && timer) {
    resultUcapan.style.display = "block";
  } else {
    resultUcapan.style.display = "none";
  }

}

// Function to start the game
function mulaiPermainan() {
  selesai = false;
  skor = 0;
  papanSkorElement.textContent = "Skor: " + skor;
  resultSection.style.display = "none";
  usedPerisaiIndexes.length = 0; // Reset used perisai indexes
  munculnyaVirus();
  timer = setTimeout(() => {
    stopGame("You Lose!");
  }, waktuPermainan);
}

// Function to generate virus appearance
function munculnyaVirus() {
  if (selesai) return;
  const perisai = randomPerisai();
  const virus = perisai.querySelector(".virus");
  perisai.classList.add("muncul");

  virus.addEventListener("click", tangkapVirus);

  setTimeout(() => {
    perisai.classList.remove("muncul");
    virus.removeEventListener("click", tangkapVirus);
    if (!selesai) {
      munculnyaVirus();
    }
  }, kecepatanMuncul);
}

// Function to handle next level
function nextLevel() {
  // Redirect to another page
  window.location.href = "level_4.html";
}
