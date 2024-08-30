function isPrime(num) { // Hàm kiểm tra số nguyên tố
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// function sumFirst100Primes() {
//     const primes = []; // Khởi tạo mảng chứa số nguyên tố
//     let num = 2; // Bắt đầu kiểm tra từ số nguyên tố đầu tiên
//     while (primes.length < 100) { // Tìm số nguyên tố
//         if (isPrime(num)) {
//             primes.push(num);
//         }
//         num++;
//     }
//     const sum = primes.reduce((total, prime) => total + prime, 0); // Tính tổng các số nguyên tố
//     return { primes, sum };
// }

// // Ví dụ sử dụng:
// const result = sumFirst100Primes();
// console.log("Các số nguyên tố:", result.primes);
// console.log("Tổng của 100 số nguyên tố đầu tiên:", result.sum);


function calculatePrimeDistances() {
    const primes = [];
    let num = 2; // bắt đầu kiểm tra từ số nguyên tố đầu tiên
    while (primes.length < 100) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }

    const distances = [];
    for (let i = 1; i < primes.length; i++) {
        distances.push(primes[i] - primes[i - 1]); // Tính khoảng cách giữa các số nguyên tố
    }

    console.log("Các số nguyên tố: ", primes);
    console.log("Khoảng cách giữa các số nguyên tố:");
    console.log(distances);
}

// Gọi hàm để tính toán và in ra khoảng cách
calculatePrimeDistances();