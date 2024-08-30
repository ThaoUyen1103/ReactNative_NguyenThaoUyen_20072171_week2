
function csvToArray(csvText) {
    // Tách từng dòng của CSV bằng dấu xuống dòng '\n'
    return csvText.trim().split('\n').map(row => {
        // Tách từng hàng thành mảng các giá trị bằng dấu phẩy ','
        return row.split(',');
    });
}

// Ví dụ sử dụng:
const csvText = `Name,Age,City
Uyên,22,GL
Tú,24,HN
Duy,40,BT`;

const array = csvToArray(csvText);
console.log(array);
array.forEach(row => {
    console.log(row);
});
