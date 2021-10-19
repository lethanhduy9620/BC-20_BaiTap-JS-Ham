/**
 * Giải thích các biến dùng trong chương trình:
 * + hoTen để lưu giá trị tên từ ô "Nhập họ tên"
 * + soKW để lưu giá trị từ ô "Nhập số kW"
 * + tienDien để lưu giá trị tiền điện đã được tính từ hàm TinhTienDien()
 * 
 */

function InKetQuaTienDien() {
    var hoTen = document.querySelector("#txtHoTen").value;
    var soKW = document.querySelector("#txtSoDien").value;
    var tienDien = TinhTienDien(soKW);
    tienDien = new Intl.NumberFormat().format(tienDien);
    document.querySelector("#txtKetQua").value = "Họ tên: " + hoTen + " ;Tiền điện: " + tienDien;
}

document.querySelector("#btnTinhTien").onclick = InKetQuaTienDien;

function TinhTienDien(soKW) {
    if (soKW <= 50) {
        return soKW * 500;
    }
    else if (soKW > 50 && soKW <= 100) {
        return (soKW - 50) * 650 + 50 * 500;
    }
    else if (soKW > 100 & soKW <= 200) {
        return (soKW - 100) * 850 + 50 * 650 + 50 * 500;
    }
    else if (soKW > 200 && soKW <= 350) {
        return (soKW - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    }
    else if (soKW > 350) {
        return (soKW - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    }
}
