// Dika Wicaksono

const users = require("./users.js").users;

// Soal Nomor 7
// tentukan user yang tidak mempunyai teman bernama Irfi dan Adella dan ada berapa jumlah nya


// 1. Buat function untuk mencari user yang tidak mempunyai teman bernama "Irfi" dan "Adella"
const checkFriends = (data) => {
    //2. Buat variable untuk menampung array kosong
    let result = [];
    //3. Looping untuk mengecheck data satu satu
    for (let i = 0; i < data.length; i++) {
      // 4. Buat variable untuk menampung data user
      const user = data[i];
      //5. Memeriksa apakah user mempunyai teman bernama "Irfi"
      const hasIrfi = user.friends.some((friends) => friends.name === "Irfi");
      //6. Memeriksa apakah user mempunyai teman bernama "Adella"
      const hasAdella = user.friends.some((friends) => friends.name === "Adella");
  
      // 7. Jika tidak memiliki teman bernama "Irfi" dan "Adella", akan menambahkan pengguna ke array result
      if (!hasIrfi && !hasAdella) {
        result.push(user);
      }
    }
    // 8. Mengembalikan array result yang berisi pengguna yang tidak memiliki teman "Irfi" dan "Adella"
    return result;
  };
  
  //9. Memanggil fungsi checkFriends dengan array users sebagai argumen
  const countCheckFriends = checkFriends(users);
  
  //10. Menampilkan output jumlah pengguna yang tidak memiliki teman "Irfi" dan "Adella"
  console.log("====================================================================");
  console.log("Jumlah user yang tidak memiliki teman bernama 'Irfi' dan 'Adella' = " + countCheckFriends.length);
  console.log("====================================================================");
  //11. Menampilkan output pengguna yang tidak memiliki teman "Irfi" dan "Adella"
  console.log(checkFriends(users));