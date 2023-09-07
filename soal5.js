// Dika Wicaksono

const users = require("./users.js").users;

// Soal Nomor 5
// tentukan user yang eyeColor nya blue dan ada berapa jumlah nya

//1. Buat function untuk mencari user dengan eye color "blue"
const checkEyeColorBlue = (data) => {
    // 2. Buat variable baru untuk menampung array kosong
    let result = [];
  
    // 3. Looping untuk mengecheck data satu satu
    for (let i = 0; i < data.length; i++) {
      // 4. Mengecheck jika dalam data ada eyeColor dengan nilai Blue
      if (data[i].eyeColor === "blue" ){
        // 5. Memasukkan data jika sesuai dengan kondisi di atas ke dalam variable array
        result.push(data[i])
      }
    }
    // 6. Mengembalikan hasil looping di atas dengan pengguna yang memiliki eyeColor bernilai Blue
    return result;
  }
  
  // 7. Memanggil fungsi checkEyeColorBlue dengan array users sebagai argumen
  const eyeColorBlue = checkEyeColorBlue(users);
  
  // 8. Menampilkan output jumlah user yang memiliki eyeColor Blue
  console.log("==========================================");
  console.log("Jumlah user dengan eyeColor 'Blue' = " + eyeColorBlue.length );
  console.log("==========================================");
  // 9. Menampilkan output user yang memiliki eyeColor Blue
  console.log(checkEyeColorBlue(users))