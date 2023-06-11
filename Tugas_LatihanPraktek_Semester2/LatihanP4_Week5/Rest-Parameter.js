// Rest Parameters digunakan saat ingin membuat sebuah fungsi yang dapat menerima argumen tanpa batas. Rest parameter memungkinkan kita untuk mengumpulkan argumen-argumen tersebut menjadi sebuah array di dalam fungsi.

// Contoh pengaplikasiannya saat melakukan operasi matematika yang melibatkan banyak angka, menghitung total harga dari berbagai produk dalam sebuah keranjang belanja, atau menggabungkan dan memanipulasi data dari sumber-sumber yang berbeda

// Ada 2 situasi yang biasa digunakan :

// 1. Fungsi demgan jumlah argumen yang tidak pasti
function pie(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
console.log("=== Output Program 1 ===");
console.log(pie(1, 2, 3, 4, 5)); // Output: 15
console.log(pie(10, 20)); // Output: 30
console.log(pie(1, 2, 3)); // Output: 6
console.log("=======================");

// 2. Penggabungan nilai argumen
function mergeValues(separator, ...values) {
  return values.join(separator);
}
console.log("                         ");
console.log("=== Output Program 2 ===");
console.log(mergeValues("-", "a", "b", "c")); // Output: "a-b-c"
console.log(mergeValues(" ", "Hello", "world")); // Output: "Hello world"
console.log(mergeValues(", ", "Apple", "Banana", "Orange")); // Output: "Apple, Banana, Orange"
console.log("=======================");
