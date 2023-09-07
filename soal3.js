// M. Gilang Pradana

const users = require("./users.js").users;

//3.  tentukan user yang registered pada tahun 2014 sampai dengan 2018 dan ada berapa jumlah user nya

const cekregis = (data) => {
    //buat array kosong
    let result = [];
    //cek data
    for (let i = 0; i < data.length; i++) { 
        // Mengonversi tanggal registrasi ke objek tanggal
        // parseInt untuk konversi string ke integer, slice(0.4) unutk mengambil 4 karakter pertama
       const registeredYear = parseInt(data[i].registered.slice(0, 4));
        //lakukan kondisi bila tahun lebih dari 2014 dan kurang dari 2018
        if (registeredYear >= 2014 && registeredYear <= 2018) {
            //masukan data ke array
            result.push(data[i]);
        }
    }

    return result;
}
//tampilkan
console.log(cekregis(users));