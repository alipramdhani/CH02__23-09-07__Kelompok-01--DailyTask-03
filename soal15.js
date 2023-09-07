// M. Fajrin

const users = require("./users.js").users;

// soal 15 rubah user yang gender female address nya menjadi laut, dan user yang gender male address nya gunung

function changeAddressByGender(data) {
  //melakukan clone array untuk menghindari side effect

  const results = [...data];

  // melakukan perulangan untuk mendapatkan value array tiap index

  for (let i = 0; i < results.length; i++) {
    // ubah value property bedasarkan gender pada tiap index array

    if (results[i].gender === "female") {
      results[i].address = "laut";
    } else {
      results[i].address = "gunung";
    }
  }
  return results;
}

console.info(changeAddressByGender(users));
