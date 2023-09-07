// Apriman Fikri

const users = require("./users.js").users;

// 12) tentukan user yang mempunyai nama kurang dari 10 karakter dan umur nya diatas 30 atau gender nya Male dan eyeColor nya brown!

const filter = (data) => {
    // tempat penampungan hasil
    let result = [];
  
    // looping data dalam array
    for (let i = 0; i < data.length; i++) {
      // memeriksa apakah nama kurang dari 10 karakter dan umur di atas 30 atau gender Male dan eyeColor brown
      if (
        data[i].name.length < 10 &&
        (data[i].age > 30 ||
          (data[i].gender === "male" && data[i].eyeColor === "brown"))
      ) {
        // jika kriteria terpenuhi maka push data kedalam result
        result.push(data[i]);
      }
    }
    // print total user dengan nama kurang dari 10 karakter dan umur di atas 30 atau gender Male dan eyeColor brown
    console.log(
      `Jumlah user dengan nama kurang dari 10 karakter dan umur di atas 30 atau gender Male dan eyeColor brown adalah: ${result.length}`
    );
    console.log("==========================================");
  
    return result;
  };
  
  // panggil fungsi filter dan print hasilnya di konsol
  console.log(filter(users));