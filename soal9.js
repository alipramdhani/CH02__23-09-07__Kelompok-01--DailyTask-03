// Apriman Fikri

const users = require("./users.js").users;

// 9) tentukan user yang company huruf belakang nya berawal E dan ada berapa jumlah user nya!

const companyE = (data) => {
    // tempat penampungan hasil
    let result = [];
    // looping data dalam array
    for (let i = 0; i < data.length; i++) {
      // memeriksa apakah nama company huruf belakang nya berawal dengan E menggunakan charAt untuk mendapatkan karakter pertama dari nama company
      if (data[i].company.charAt(data[i].company.length - 1) === "E") {
        result.push(data[i]);
      }
    }
    // print total user yang memiliki company dengan huruf belakang nya berawal E
    console.log(
      `Jumlah user yang company huruf belakang nya berawal E adalah: ${result.length}`
    );
    console.log("==========================================");
  
    return result;
  };
  // panggil fungsi companyE dan print hasilnya di konsol
  console.log(companyE(users));