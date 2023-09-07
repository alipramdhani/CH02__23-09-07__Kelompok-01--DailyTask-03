// M. Gilang Pradana

const users = require("./users.js").users;

// 2. tentukan user yang gender female dan ada berapa jumlah user nya

const cekgender = (data) => {
    // buat array kosong
    let result = [];
    // gunakan perulangan untuk mengecek data
    for (let i = 0; i < data.length; i++) {
        // cek kondisi bila gender = female
        if (data[i].gender === 'female') {
            // masukan data yang didapat keddalam array
            result.push(data[i])
        }
    }

    return result;
}
//print ke console log
console.log(cekgender(users));
// menghitung banyak data dengan length
const gendercount = cekgender(users).length;
//print jumlah data
console.log(`banyak user yg gendernya female adalah = ${gendercount}`);