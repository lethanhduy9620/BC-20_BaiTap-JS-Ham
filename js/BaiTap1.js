/**
 * Các công việc phải làm:
 * * - Xét đối tượng ưu tiên 
 * * - Xét loại khu vực
 * * - Tính tổng điểm của thí sinh và cộng điểm ưu tiên
 * * - Xét loại đậu rớt cho sinh viên
 * 
 * Giải thích các biến dùng trong chương trình:
 * + diemChuan: chứa giá trị điểm chuẩn lấy được từ ô Nhập điểm chuẩn
 * + khuVuc: chứa loại khu vực được chọn từ selectbox Chọn khu vực
 * + doiTuong: chứa loại khu vực được chọn từ selectbox Chọn đối tượng
 * + diemMon1, diemMon2, diemMon3 chứa các giá trị điểm được nhập từ ô Nhập điểm thứ nhất, hai và ba.
 * 
 * 
 * */

//* Hàm main
function XetDiemTuyenSinh() {
    var diemChuan = document.querySelector("#txtDiemChuan").value;
    var khuVuc = document.querySelector("#txtKhuVuc").value;
    var doiTuong = document.querySelector("#txtDoiTuong").value;
    var diemMon1 = document.querySelector("#txtDiemMon1").value;
    var diemMon2 = document.querySelector("#txtDiemMon2").value;
    var diemMon3 = document.querySelector("#txtDiemMon3").value;

    if (Math.min(diemMon1, diemMon2, diemMon3) <= 0) {
        document.querySelector("#txtKetQua").value = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
    }
    else {
        var diemKhuVuc = XetLoaiKhuVuc(khuVuc);
        var diemDoiTuong = XetLoaiDoiTuong(doiTuong);
        var tongDiem = TinhTongDiem(diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong);
        KiemTraKetQua(tongDiem, diemChuan);
    }
}

document.querySelector("#btnKetQua").onclick = XetDiemTuyenSinh;

//*Hàm xử lý điểm ưu tiên theo khu vực
function XetLoaiKhuVuc(khuVuc) {
    switch (khuVuc) {
        case "A":
            return 2
            break;
        case "B":
            return 1
            break;
        case "C":
            return 0.5
            break;
        default:
            return 0;
            break;
    }
}

//*Hàm xử lý điểm ưu tiên theo đối tượng
function XetLoaiDoiTuong(doiTuong) {
    switch (doiTuong) {
        case "1":
            return 2.5
            break;
        case "2":
            return 1.5
            break;
        case "3":
            return 1
            break;
        default:
            return 0;
            break;
    }
}

//*Hàm tính tổng điểm của thí sinh
function TinhTongDiem(diemMon1, diemMon2, diemMon3, diemKhuVuc, diemDoiTuong) {
    return Number(diemMon1) + Number(diemMon2) + Number(diemMon3) + Number(diemKhuVuc) + Number(diemDoiTuong);
}

//*Hàm so sánh tổng điểm ưu tiên của thí sinh và điểm chuẩn để xuất ra kết quả
function KiemTraKetQua(tongDiem, diemChuan) {
    //! Điểm thí sinh đã lọc trường hợp bé hơn hoặc bằng 0 nên chỉ so sánh điểm chuẩn với tổng điểm của thí sinh
    if (tongDiem >= diemChuan) {
        document.querySelector("#txtKetQua").value = "Bạn đã đậu. Tổng điểm: " + tongDiem;
    }
    else {
        document.querySelector("#txtKetQua").value = "Bạn đã rớt. Tổng điểm: " + tongDiem;
    }
}