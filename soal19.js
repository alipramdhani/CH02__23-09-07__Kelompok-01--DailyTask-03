// Adella Desinta Mahfuddin

// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
    // tulis jawabanmu disini
    let hasil = 0;
  
    // loop digit angka
    while (n > 0) {
      // mengambil digit terakhir n menggunakan operator modulus
      let digit = n % 10;
      // menambahkan digit yang telah diambil ke variabel hasil
      hasil += digit;
      // menghapus digit terakhir yang telah diambil dengan membagi angka dengan 10, Math.floor untuk memastikan hasilnya adalah bilangan bulat
      n = Math.floor(n / 10);
    }
    // kembalikan nilai hasil
    return hasil;
  }

console.log(solution(2022)) // expected output 6
console.log(solution(1001)) // expected output 2
