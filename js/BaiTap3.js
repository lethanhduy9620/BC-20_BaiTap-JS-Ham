/**
 * *Công việc phải làm:
 * * - Khai báo hàm main và lấy giá trị từ ô input
 * * - Tính tổng thu nhập
 * * - Tính thu nhập chịu thuế
 * * In ra Họ tên: ...; Tiền thuế thu nhập cá nhân: 470,000 VND
 * 
 * Giải thích các biến dùng trong chương trình:
 * + hoTen để lưu giá trị tên từ ô "Chọn loại khách hàng"
 * + tongThuNhap để lưu giá trị từ ô "Tổng thu nhập năm"
 * + soNguoiPhuThuoc để lưu giá trị từ ô "Số người phụ thuộc"
 * + thuNhapChiuThue để lưu giá trị từ hàm TinhThuNhapChiuThue trả về
 * + thueThuNhapCaNhan để lưu giá trị từ hàm TinhThueThuNhap trả về
 */



//*Hàm main
function KetQuaThueThuNhapCaNhan() {
    var hoTen = document.querySelector("#txtHoTen").value;
    var tongThuNhap = document.querySelector("#txtTongThuNhap").value;
    var soNguoiPhuThuoc = document.querySelector("#txtNguoiPhuThuoc").value;
    var thuNhapChiuThue = TinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc);
    var thueThuNhapCaNhan = TinhThueThuNhap(thuNhapChiuThue);;
    if (tongThuNhap <= 0) {
        document.querySelector("#txtKetQua").value = "Số tiền thu nhập không hợp lệ";
    }
    else {
        document.querySelector("#txtKetQua").value = "Họ tên: " + hoTen + "; Tiền thuế thu nhập cá nhân: " + new Intl.NumberFormat().format(thueThuNhapCaNhan) + " VND";
    }
}

document.querySelector("#btnTinhThue").onclick = KetQuaThueThuNhapCaNhan;

function TinhThuNhapChiuThue(tongThuNhap, soNguoiPhuThuoc) {
    return tongThuNhap - (4e+6) - soNguoiPhuThuoc * (1.6e+6);
}

function TinhThueThuNhap(thuNhapChiuThue) {
    if (thuNhapChiuThue <= 60e+6) {
        return thuNhapChiuThue * (5 / 100);
    }
    else if (thuNhapChiuThue > 60e+6 & thuNhapChiuThue <= 120e+6) {
        return thuNhapChiuThue * (10 / 100);
    }
    else if (thuNhapChiuThue > 120e+6 & thuNhapChiuThue <= 210e+6) {
        return thuNhapChiuThue * (15 / 100);
    }
    else if (thuNhapChiuThue > 210e+6 & thuNhapChiuThue <= 384e+6) {
        return thuNhapChiuThue * (20 / 100);
    }
    else if (thuNhapChiuThue > 384e+6 & thuNhapChiuThue <= 624e+6) {
        return thuNhapChiuThue * (25 / 100);
    }
    else if (thuNhapChiuThue > 624e+6 & thuNhapChiuThue <= 960e+6) {
        return thuNhapChiuThue * (30 / 100);
    }
    else if (thuNhapChiuThue > 960e+6) {
        return thuNhapChiuThue * (35 / 100);
    }
}


