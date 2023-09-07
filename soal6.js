// Dika Wicaksono

const users = require("./users.js").users;

// Soal Nomor 6
// tentukan user yang gender female atau user yang eyeColor nya brown dan ada berapa jumlah user nya 


// 1. Buat function untuk mencari user dengan gender "female" atau eyeColor "brown"
const checkGenderOrEyeColor = (data) => {
    // 2. Buat variable baru untuk menampung array kosong
    let result = [];
    // 3. Looping untuk mengecheck data satu satu
    for (let i = 0; i < data.length; i++) {
      // 4. Mengecheck jika dalam data ada gender Female atau eyeColor dengan nilai Brown
      if (data[i].gender === "female" || data[i].eyeColor === "brown") {
        // 5. Memasukkan data jika sesuai dengan kondisi di atas ke dalam variable array
        result.push(data[i])
      }
    }
    // 6. Mengembalikan hasil looping di atas dengan pengguna yang memiliki gender Female atau eyeColor bernilai Brown
    return result;
  }
  
  // 7. Memanggil fungsi checkGenderOrEyeColor dengan array users sebagai argumen
  const countGenderOrEyeColor = checkGenderOrEyeColor(users);
  
  // 8. Menampilkan output jumlah user yang memiliki gender Female atau eyeColor dengan nilai Brown
  console.log("=======================================================================");
  console.log("Jumlah user dengan gender 'Female' atau user dengan eyeColor 'Brown' = " + countGenderOrEyeColor.length);
  console.log("=======================================================================");
  //9. Menampilkan pengguna yang memiliki gender Female atau eyeColor dengan nilai Brown
  console.log(checkGenderOrEyeColor(users));