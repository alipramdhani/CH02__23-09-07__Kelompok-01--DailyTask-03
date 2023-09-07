// M. Fajrin

const users = require("./users.js").users;

// soal 14 rubah setiap company user menjadi binar dan pada email setiap user berubah menjadi @binar.org, contoh = imam@fsw2.com menjadi imam@binar.org

function changeUserCompany(data) {
  //melakukan clone array untuk menghindari side effect

  const result = [...data];

  // melakukan perulangan for untuk mendapatkan value dalam tiap index array

  for (let i = 0; i < result.length; i++) {
    // mengubah value property company pada tiap index

    result[i].company = "binar";

    // menyimpan value property email pada variable getEmail pada setiap index

    const getEmail = result[i].email;

    /** 
       melakukan konversi tipe data pada property email dari string menjadi array
       dengan menggunakan method split() dengan simbol @ sebagai separatornya 
       pada tiap index 
    */

    const splitEmail = getEmail.split("@");

    /** 
       mengubah alamat email menjadi @binar.org pada index kedua
       pada value property email pada index array satu 
    */

    const modifyEmail = ([splitEmail[0], splitEmail[1]] = [
      splitEmail[0],
      "@binar.org",
    ]);

    /**
     setelah melakukan perubahan pada alamat email, dilakukan konversi array menjadi
     string dengan method join()
    */

    result[i].email = modifyEmail.join("");
  }
  return result;
}

console.info(changeUserCompany(users));
