// Apriman Fikri

const users = require("./users.js").users;

// 10) tentukan user yang berumur dibawah 30 dan registered sesudah tahun 2018 dan berapa jumlah nya!

const ageAndRegister = (data) => {
    // tempat penampungan hasil
    let result = [];
    // looping data dalam array
    for (let i = 0; i < data.length; i++) {
      // memeriksa apakah user berumur di bawah 30 dan terdaftar setelah tahun 2018
      if (data[i].age < 30 && data[i].registered.slice(0, 4) > "2018") {
        // jika iya maka push data kedalam result
        result.push(data[i]);
      }
    }
    // print total user yang berumur di bawah 30 dan terdaftar setelah tahun 2018
    console.log(
      `Jumlah user berumur di bawah 30 dan terdaftar setelah tahun 2018 adalah: ${result.length}`
    );
    console.log("==========================================");
    return result;
  };
  // panggil fungsi ageAndRegister dan print hasilnya di konsol
  console.log(ageAndRegister(users));