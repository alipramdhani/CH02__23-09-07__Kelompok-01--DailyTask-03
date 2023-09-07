// Mohamad Alif Ramdani

// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

// array
const students = [
    { name: "Peter", score: 30},
    { name: "Parker", score: 50},
    { name: "Harry", score: 70},
    { name: "Eva", score: 79},
    { name: "Justin", score: 60},
    { name: "Bieber", score: 90},
    { name: "Evan", score: 55},
    { name: "Rowling", score: 90}
]

// Membuat looping untuk menentukan kelulusan siswa
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    // Kondisi
    // jika nilai <50 maka nama dari array students akan dipanggil dan diberi keterangan "tidak lulus" 
    if (student.score < 50) {
        console.log(`${student.name} : tidak lulus`);
        // jika nilai >= 50 dan <70 maka nama dari array students akan dipanggil dan diberi keterangan "remedial"
    } else if (student.score >= 50 && student.score < 70) {
        console.log(`${student.name} : remedial`);
        // jika nilai selain kondisi diatas maka nama dari array students akan dipanggil dan diberi keterangan "lulus"
    } else {
        console.log(`${student.name} : lulus`);
    }
}
