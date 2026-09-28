/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (SUDAH DILENGKAPI)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */
 
 
// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
 
// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// console.log() mencetak teks ke tab Console. Kalau tulisan ini muncul,
// berarti <script src="app.js"></script> di index.html sudah benar.
console.log("Skrip app.js berhasil terhubung!");
 
 
// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================
 
// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// const = konstanta, nilainya TIDAK boleh diubah setelah dibuat.
// Penulisan huruf kapital (NAMA_KEDAI) adalah konvensi untuk konstanta.
const NAMA_KEDAI = "Kopi PSTI Kampus";
 
// let = variabel biasa, nilainya BOLEH diubah kapan saja.
let namaKasir = "Kak Eko";
let shiftKerja = "Shift Pagi (08.00 - 15.00)";
 
// Tanda + di sini menyambung (concatenate) string dengan variabel.
console.log("Nama Kedai : " + NAMA_KEDAI);
console.log("Nama Kasir : " + namaKasir);
console.log("Shift Kerja: " + shiftKerja);
 
 
// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Re-assign (menimpa nilai) namaKasir. Ini BERHASIL karena memakai let.
namaKasir = "Kak Sinta";
console.log("Kasir diganti menjadi: " + namaKasir);
 
// Kalau baris di bawah ini diaktifkan (hapus //), browser akan menampilkan
// error "Assignment to constant variable" karena NAMA_KEDAI adalah const:
// NAMA_KEDAI = "Kedai Lain";
 
 
// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. alert() = pop-up pesan dengan tombol OK.
//    "\n" artinya pindah baris di dalam teks.
alert("Selamat datang di " + NAMA_KEDAI + "!\nKasir hari ini: " + namaKasir);
 
// 2. prompt() = pop-up dengan kolom input. Hasilnya berupa:
//    - string yang diketik user, atau
//    - "" (kosong) jika klik OK tanpa mengetik, atau
//    - null jika klik Cancel.
let namaPelanggan = prompt("Silakan masukkan nama Anda:");
 
// 3. if (namaPelanggan) bernilai TRUE hanya jika ada isinya.
//    Baik "" maupun null dianggap "falsy" (dianggap salah) oleh JavaScript.
if (namaPelanggan) {
  alert("Halo, " + namaPelanggan + "! Selamat berbelanja di " + NAMA_KEDAI + ".");
  console.log("Pelanggan: " + namaPelanggan);
} else {
  namaPelanggan = "Pelanggan Setia";
  alert("Nama tidak diisi. Anda akan dipanggil sebagai \"" + namaPelanggan + "\".");
  console.log("Pelanggan (default): " + namaPelanggan);
}
 
 
// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).
 
// TODO 3:
// 1. Tiga variabel poin transaksi (semuanya integer).
let poinKopi = 45;
let poinMakanan = 35;
let poinMerchandise = 20;
 
// 2. Total poin = hasil penjumlahan ketiganya (45 + 35 + 20 = 100).
let totalPoin = poinKopi + poinMakanan + poinMerchandise;
 
// 3. Cetak rincian ke Console.
console.log("=== RINCIAN POIN: " + namaPelanggan + " ===");
console.log("Poin Kopi        : " + poinKopi);
console.log("Poin Makanan     : " + poinMakanan);
console.log("Poin Merchandise : " + poinMerchandise);
console.log("Total Poin       : " + totalPoin);
 
 
// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================
 
// TODO 4:
// 1. Siapkan dua variabel string kosong, nanti diisi oleh percabangan.
let tierMember = "";
let benefit = "";
 
// 2. if - else if - else dicek dari ATAS ke BAWAH dan berhenti di kondisi
//    pertama yang benar. Karena itu syarat harus diurutkan dari yang
//    paling tinggi (>= 100) ke yang paling rendah.
if (totalPoin >= 100) {
  tierMember = "Platinum";
  benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 70) {
  // Sampai di sini pasti totalPoin < 100, jadi rentangnya 70 - 99.
  tierMember = "Gold";
  benefit = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40) {
  // Rentang 40 - 69.
  tierMember = "Silver";
  benefit = "Diskon 5% untuk menu minuman";
} else {
  // Sisanya: kurang dari 40.
  tierMember = "Bronze";
  benefit = "Member Reguler (kumpulkan poin untuk naik tier)";
}
 
// 3. Cetak hasil ke Console.
console.log("=== STATUS MEMBER ===");
console.log("Tier Member : " + tierMember);
console.log("Benefit     : " + benefit);
 
// 4. Ringkasan lewat pop-up.
alert(
  "=== RINGKASAN MEMBER ===\n" +
  "Nama        : " + namaPelanggan + "\n" +
  "Total Poin  : " + totalPoin + "\n" +
  "Tier        : " + tierMember + "\n" +
  "Benefit     : " + benefit
);
 
 
// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================
 
// TODO 5A:
// p1, p2, p3 = parameter (data masukan fungsi).
// return = mengirim hasil kembali ke tempat fungsi dipanggil.
function hitungTotalPoin(p1, p2, p3) {
  let total = p1 + p2 + p3;
  return total;
}
 
 
// TODO 5B:
// Logikanya sama dengan Aktivitas 4, tetapi dibungkus dalam fungsi
// sehingga bisa dipanggil berkali-kali dengan data yang berbeda.
// Setiap cabang langsung return, jadi fungsi berhenti di return pertama.
function tentukanTierMember(poin) {
  if (poin >= 100) {
    return "Platinum (Diskon 20% + Gratis 1 Minuman Signature)";
  } else if (poin >= 70) {
    return "Gold (Diskon 10% di setiap transaksi)";
  } else if (poin >= 40) {
    return "Silver (Diskon 5% untuk menu minuman)";
  } else {
    return "Bronze (Member Reguler)";
  }
}
 
 
// TODO 5C:
console.log("=== SIMULASI PELANGGAN LAIN (PAKAI FUNCTION) ===");
 
// Pelanggan B: 35 + 25 + 20 = 80 -> Gold
let totalPoinB = hitungTotalPoin(35, 25, 20);
let tierB = tentukanTierMember(totalPoinB);
console.log("--- Pelanggan B ---");
console.log("Total Poin : " + totalPoinB);
console.log("Tier       : " + tierB);
 
// Pelanggan C: 15 + 10 + 5 = 30 -> Bronze
let totalPoinC = hitungTotalPoin(15, 10, 5);
let tierC = tentukanTierMember(totalPoinC);
console.log("--- Pelanggan C ---");
console.log("Total Poin : " + totalPoinC);
console.log("Tier       : " + tierC);
 
 
// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================
 
// TODO 6A:
// Array = kumpulan data dalam satu variabel, ditulis dalam kurung siku [].
// Nomor indeks array dimulai dari 0 (bukan 1).
let menuRekomendasi = [
  "Caramel Macchiato",       // indeks 0
  "Kopi Susu Gula Aren",     // indeks 1
  "Croissant Butter Keju",   // indeks 2
  "Matcha Cream Latte",      // indeks 3
  "Cinnamon Roll Hangat"     // indeks 4
];
 
 
// TODO 6B:
console.log("=== MENU REKOMENDASI UNTUK MEMBER ===");
 
// for (awal; syarat; langkah):
//   let i = 0                      -> mulai dari indeks 0
//   i < menuRekomendasi.length     -> ulangi selama i masih lebih kecil dari jumlah menu
//   i++                            -> tambah i sebanyak 1 di setiap putaran
// Nomor urut memakai (i + 1) supaya tampil mulai dari 1, bukan 0.
for (let i = 0; i < menuRekomendasi.length; i++) {
  console.log((i + 1) + ". " + menuRekomendasi[i]);
}
 
 
// TODO 6C:
// .length = jumlah elemen di dalam array.
console.log("-------------------------------------");
console.log("Total Menu Favorit: " + menuRekomendasi.length + " menu");
 
console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
 
