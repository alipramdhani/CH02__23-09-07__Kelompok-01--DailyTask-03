// M. Gilang Pradana

const users = require("./users.js").users;

// 1) tentukan yang mempunyai buah favorit dia nya banana
const checkFavFruit = (data) => {
  // 1. bikin variable array kosong
  let result = [];
  // 2. looping untuk mengecheck satu satu data
  for (let i = 0; i < data.length; i++) {
    // 3. check data favorit fruit yang nilai nya banana
    if (data[i].favoriteFruit === "banana") {
      // 4. masukkan data yang sesuai hasil check kondisi di atas
      result.push(data[i]);
    }
  }

  return result;
};

console.log(checkFavFruit(users));
