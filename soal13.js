// M. Fajrin

const users = require("./users.js").users;

// soal 13 setiap nama dari user tukar nama belakang dan depan nya, contoh = "imam taufiq" menjadi "taufiq imam"

function reverseUserName(data) {
  // melakukan clone array untuk menghindari side effect

  const results = [...data];

  // melakukan perulangan for untuk mendapatkan value dalam index array

  for (let i = 0; i < results.length; i++) {
    // variable getFullName untuk menyimpan value property name di pada tiap index array of object

    const getFullName = results[i].name;

    /** 
       variable splitName : untuk menyimpan hasil split untuk menjadikan value property nama
       dari String menjadi array dengan spasi atau (" ") yang menjadi separatornya pada tiap 
       property name disetiap index  array of object
    */

    const splitName = getFullName.split(" ");

    /** 
      variable swapName untuk menyimpan penukaran value dari array index nol dengan array index kesatu
      Pada tiap propery name 
    */

    const swapName = ([splitName[0], splitName[1]] = [
      splitName[1],
      splitName[0],
    ]);

    /**
       Memperbarui value dari property name pada tiap index array of object dan melakukan konversi array ke String
       Menggunakan method join() dengan spasi sebagai separator stringnya
    */

    results[i].name = swapName.join(" ");
  }
  return results;
}

console.info(reverseUserName(users));
