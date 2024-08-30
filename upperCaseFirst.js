
function capitalizeFirstLetter(text) {
    return text
        .split(' ')               // Tách chuỗi thành mảng các từ bằng khoảng trắng
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            // Viết hoa chữ cái đầu của từ và nối với phần còn lại của từ
        })
        .join(' ');               // Kết hợp các từ lại thành chuỗi
}

// Ví dụ sử dụng:
const text2 = "nguyễn thảo uyên";
const capitalizedText = capitalizeFirstLetter(text2);
console.log("Chuỗi được in hoa chữ cái đầu: " + capitalizedText);