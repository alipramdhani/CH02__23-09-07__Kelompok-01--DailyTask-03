// Adella Desinta Mahfuddin

// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.


function solution(n) {
    // tulis jawabanmu disini
    //   untuk menyelesaikan soal kita bisa menggunakan conditional statement seperti if else statement
  
    // cocokan kategori dengan menentukan batas nilai atas dan nilai bawah
    if (n >= 91 && n <= 100) {
      // jika nilai berada di rentang 91-100 maka print ini
      result = 'A';
    } else if (n >= 81 && n <= 90) {
      // jika nilai berada di rentang 81-90 maka print ini
      result = 'B';
    } else if (n >= 71 && n <= 80) {
      // jika nilai berada di rentang 71-80 maka print ini
      result = 'C';
    } else if (n >= 61 && n <= 70) {
      // jika nilai berada di rentang 61-70 maka print ini
      result = 'D';
    } else if (n <= 60) {
      // jika nilai berada di bawah 60 atau =60 maka print ini
      result = 'E';
    } else {
      // jika tidak ada, print ini
      result = 'Nilai tidak ada';
    }
  
    return result;
  }

console.log(solution(95)) // expected output A
console.log(solution(76)) // expected output C
