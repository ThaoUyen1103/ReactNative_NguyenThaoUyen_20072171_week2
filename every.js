let arr = [6, 29, 55, 110, 60, 21];
let bool = arr.every(item => item >= 10);
console.log('every >= 25: ' + bool);
bool = arr.every(item => item > 0);
console.log('every > 0: ' + bool);
