// M Fajrin

// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.

// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

function solution(x, y) {
    // tulis jawabanmu disini
  
    // cek apakah x kelipatan 5
  
    if (x % 5 !== 0) {
  
      // jika tidak maka return y
      
      return y;
    }
  
    // inisiasi variable untuk biaya bank
  
    const bankBill = 0.5;
    
    // jika y lebih besar dari x dan biaya bank maka lakukan transaksi
  
    if (y > x + bankBill) {
      const restBalance = y - (x + bankBill);
      return restBalance;
    }
  
    // jika tidak return y
  
    return y;
  }
  
  console.log(solution(30, 20)); // expected output 89.5
  console.log(solution(42, 100)); // expected output 100
  