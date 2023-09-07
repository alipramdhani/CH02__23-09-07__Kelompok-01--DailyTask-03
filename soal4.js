// M. Gilang Pradana

const users = require("./users.js").users;

// 4. tentukan user yang mempunya friend bernama Imam dan ada berapa jumlah user nya

const cekgender = (data) => {
    let result = [];
    //cek data
    for (let i = 0; i < data.length; i++) {
        //kondisi bila didalam data friend terdapat data yang bernama imam
        //some untuk mengecek array yang berisi element tertentu
        if (data[i].friends.some(friends => friends.name === "Imam")) {
            result.push(data[i])
        }
    }

    return result;
}
console.log(cekgender(users));
//cek banyak data
const datalenght =  cekgender(users).length;
console.log(`banyak data = ${datalenght}`)