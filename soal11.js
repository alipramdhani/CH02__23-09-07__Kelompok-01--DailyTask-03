// Apriman FikriS

const users = require("./users.js").users;

// 11) tentukan user yang mempunyai teman bernama Grace dan favorit fruit nya apple atau banana!

const friendAndFruits = (data) => {
    // tempat penampungan hasil
    let result = [];
    // looping data dalam array
    for (let i = 0; i < data.length; i++) {
      // tempat penampungan hasil
      let valid = false;
      // memeriksa apakah ada teman dengan nama Grace
      for (let j = 0; j < data[i].friends.length; j++) {
        if (data[i].friends[j].name === "Grace") {
          valid = true;
        }
      }
      // jika keduanya terpenuhi, masukkan user ke dalam hasil
      if (
        valid &&
        (data[i].favoriteFruit === "apple" || data[i].favoriteFruit === "banana")
      ) {
        result.push(data[i]);
      }
    }
    // print total user yang memenuhi kriteria
    console.log(
      `Jumlah user dengan teman "Grace" dan favorit buah "apple" atau "banana" adalah: ${result.length}`
    );
    console.log("==========================================");
    return result;
  };
  // panggil fungsi friendAndFruits dan print hasilnya di konsol
  console.log(friendAndFruits(users));