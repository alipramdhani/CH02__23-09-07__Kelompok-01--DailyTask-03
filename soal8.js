// Dika Wicaksono

const users = require("./users.js").users;

// Soal Nomor 8
// tentukan user yang company huruf depan nya berawal L dan ada berapa jumlah user nya

//1. Buat function untuk mencari pengguna dengan perusahaan (company) diawali huruf "L"
const findCompany = (data) => {
    //2. Menginisialisasi array untuk menyimpan pengguna yang memenuhi kriteria
    const result = [];
  
    //3. Melakukan iterasi pada array pengguna (Data)
    for (let i = 0; i < data.length; i++) {
      // 4. Buat variable untuk menampung data user
      const user = data[i];
  
      //5. Memeriksa apakah nama perusahaan (company) diawali dengan huruf "L"
      if (user.company.charAt(0).toUpperCase() === 'L') {
        result.push(user);
      }
    }
  
    //6. Mengembalikan array pengguna yang memenuhi kriteria
    return result;
  };
  
  //7. Memanggil fungsi untuk mencari pengguna dengan perusahaan diawali huruf "L"
  const countFindCompany = findCompany(users);
  
  //8. Menampilkan output jumlah pengguna dengan perusahaan diawali huruf "L"
  console.log("====================================================================");
  console.log("Jumlah user yang perusahaan nya diawali dengan huruf 'L' = " + countFindCompany.length);
  console.log("====================================================================");
  
  //9. Menampilkan pengguna  dengan perusahaan diawali huruf "L"
  console.log(findCompany(users));