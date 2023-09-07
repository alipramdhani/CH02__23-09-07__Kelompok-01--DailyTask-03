// Mohamad Alif Ramdani

// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

function sortArray(arr, format) 
{
    // Lakukan validasi format yang diinginkan
    if (format === 'ascending') {
        return arr.slice().sort((a, b) => a - b); // Mengurutkan secara ascending (kecil - besar)
    } else if (format === 'descending') {
        return arr.slice().sort((a, b) => b - a); // Mengurutkan secara descending (besar - kecil)
    } else if (format === 'alphabetical') {
        return arr.slice().sort(); // Mengurutkan secara alfabetis (A - Z)
    } else {
        return arr.slice(); // Mengembalikan array yang tidak diubah jika format tidak valid
    }
}

// Contoh :
const numbers = [5, 2, 9, 1, 5, 6];
const names = ['John', 'Alice', 'Bob', 'Eve'];

// Mengurutkan array numbers secara ascending
const ascendingNumbers = sortArray(numbers, 'ascending');
// Mengurutkan array numbers secara descending
const descendingNumbers = sortArray(numbers, 'descending');
// Mengurutkan array names secara alfabetis
const alphabeticalNames = sortArray(names, 'alphabetical');
// Format 'invalid' tidak valid, sehingga mengembalikan array yang tidak diubah
const invalidFormat = sortArray(numbers, 'invalid');


// Hasil pengurutan array dan array yang tidak diubah
console.log('Ascending Numbers:', ascendingNumbers);
console.log('Descending Numbers:', descendingNumbers);
console.log('Alphabetical Names:', alphabeticalNames);
console.log('Invalid Format:', invalidFormat);




