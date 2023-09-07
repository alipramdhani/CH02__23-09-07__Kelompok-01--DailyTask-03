// Mohamad Alif Ramdani

// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!

// Deret Fibonacci adalah deret bilangan bulat yang dua suku pertamanya adalah 0 dan 1 . Setelah itu, suku berikutnya didefinisikan sebagai penjumlahan dari dua suku sebelumnya.

// Fungsi fibonacci 
function fibonacci(n) {
    const sequence = [0, 1]; // Inisialisasi deret Fibonacci dengan angka (0 dan 1)

    // jika n <= 1, maka mengembalikan deret dengan panjang n + 1
    if (n <= 1) {
        return sequence.slice(0, n + 1);
    }

    // Iterasi untuk menghasilkan elemen-elemen berikutnya dalam deret Fibonacci
    for (let i = 2; i <= n; i++) {
        const nextValue = sequence[i - 1] + sequence[i - 2]; // Menghitung nilai berikutnya dalam deret
        sequence.push(nextValue); // Menambahkan nilai tersebut ke dalam deret
    }

    return sequence; // Mengembalikan deret Fibonacci yang dihasilkan
}

// Contoh pemanggilan fungsi fibonacci dengan 10 elemen
const n = 10;
const result = fibonacci(n);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
